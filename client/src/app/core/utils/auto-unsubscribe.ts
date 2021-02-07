export function AutoUnsubscribe(blackList: string[] = []) {
    return  function (constructor: any) {

        let original = constructor.prototype.ngOnDestroy;

        constructor.prototype.ngOnDestroy = function (this) {

            original?.bind(this, arguments);

            for (let prop in this) {
                const property = this[prop];

                if (!blackList.includes(prop)) {

                    console.log(property.unsubscribe);
                    if (property && (typeof property.unsubscribe === "function")) {
                        property.unsubscribe();
                    }
                }
            }
        }

        original && typeof original === "function" && original();
    }
}