export function AutoUnsubscribe(blackList = []) {
    return function (constructor: any) {
        const original = constructor.prototype.ngOnDestroy;

        constructor.prototype.ngOnDestroy = function (this: any) {
            for (let prop in this) {
                const property = this[prop];
                if (!blackList.includes(prop as never)) {
                    if (property && (typeof property.unsubscribe === "function")) {
                        property.unsubscribe();
                    }
                }
            }
        }

        original && typeof original === "function" && original.apply(this, arguments);
    }
}