// Incomplete declarations
//
// Manually declared for just being used method
//
declare module 'collections/map-changes' {
    interface MapChanges {

    }

    export = MapChanges;
}

declare module 'collections/property-changes' {
    interface PropertyChanges {

    }

    export = PropertyChanges;
}

declare module 'collections/generic-map' {
    interface GenericMap {
        get(key:any, defaultValue?:any):any;
        set(key:any, value?:any):this;
    }

    export = GenericMap;
}

declare module 'collections/generic-collection' {
    interface GenericCollection {
        forEach(callback:(value:any, key?:any, object?:any, depth?:any) => void):any;
    }

    export = GenericCollection;
}

declare module 'collections/sorted-array-map' {
    import GenericCollection = require('collections/generic-collection');
    import GenericMap = require('collections/generic-map');
    import PropertyChanges = require('collections/property-changes');
    import MapChanges = require('collections/map-changes');

    class SortedArrayMaps implements GenericCollection, GenericMap, PropertyChanges, MapChanges {
        getDefault?: (value:any) => any;
        constructor(values?: any, equals?: any, compare?: any, getDefault?: (value:any) => any);
        get(key:any, defaultValue?:any):any;
        set(key:any, value?:any):this;
        forEach(callback:(value:any, key?:any, object?:any, depth?:any) => void):any;
    }

    interface SortedArrayMaps {
        (values?: any, equals?: any, compare?: any, getDefault?: any): SortedArrayMaps
    }

    export = SortedArrayMaps;
}