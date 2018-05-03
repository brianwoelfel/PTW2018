namespace BluejayWeb.AgGridFilterSort
{
    /// <summary>
    /// Constant values to use when parsing meta data from ag-grid
    /// via Angular for filtering and sorting table data
    /// </summary>
    public class AgFilterConst
    {
        // ag-grid filter data types
        public static readonly string FILTER_TYPE_TEXT = "text";
        public static readonly string FILTER_TYPE_NUMBER = "number";
        public static readonly string FILTER_TYPE_DATE = "date";

        // ag-grid filter types
        public static readonly string TYPE_CONTAINS = "contains";
        public static readonly string TYPE_NOT_CONTAINS = "notContains";
        public static readonly string TYPE_EQUALS = "equals";
        public static readonly string TYPE_NOT_EQUAL = "notEqual";
        public static readonly string TYPE_STARTS_WITH = "startsWith";
        public static readonly string TYPE_ENDS_WITH = "endsWith";
        public static readonly string TYPE_LESS_THAN = "lessThan";
        public static readonly string TYPE_LESS_THAN_OR_EQUAL = "lessThanOrEqual";
        public static readonly string TYPE_GREATER_THAN = "greaterThan";
        public static readonly string TYPE_GREATER_THAN_OR_EQUAL = "greaterThanOrEqual";
        public static readonly string TYPE_IN_RANGE = "inRange";

    }
}