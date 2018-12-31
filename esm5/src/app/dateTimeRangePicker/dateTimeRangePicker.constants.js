var _a, _b;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = require("moment");
/** @type {?} */
var USA_MST_TZ_CODE = "MST";
/** @type {?} */
var USA_TZ_CODE = "PST";
/** @type {?} */
var EU_TZ_CODE = "CET";
/** @type {?} */
export var DateRangePickerConstants = {
  DEFAULT: {
    TYPE: "daily",
    INPUT_CLASS: "m1drp",
    DATE_FROMAT: "YYYY-MM-DD",
    TIME_FORMAT: "HH:mm",
    START_DATE: moment().format("YYYY-MM-DD"),
    END_DATE: moment().format("YYYY-MM-DD"),
    MIN_DATE: moment()
      .subtract(2, "year")
      .startOf("year")
      .format("YYYY-MM-DD"),
    MAX_DATE: moment().format("YYYY-MM-DD"),
    START_TIME: "00:00",
    END_TIME: "23:59",
    MODEL_KEYS: ["daily", "weekly", "monthly", "quarterly", "yearly"],
    TZ_CODE: USA_MST_TZ_CODE
  },
  CONSTANT: {
    MONTHS_AVAILABLE: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    USA_MST_TZ_CODE: USA_MST_TZ_CODE,
    USA_TZ_CODE: USA_TZ_CODE,
    EU_TZ_CODE: EU_TZ_CODE,
    TZ_CODES: [USA_TZ_CODE, EU_TZ_CODE],
    OFFSETS: ((_a = {}),
    (_a[USA_TZ_CODE] = {
      SO: -7,
      WO: -8
    }),
    (_a[EU_TZ_CODE] = {
      SO: 1,
      WO: 0
    }),
    _a),
    TZ_NAMES: ((_b = {}),
    (_b[USA_MST_TZ_CODE] = "America/Phoenix"),
    (_b[USA_TZ_CODE] = "America/Los_Angeles"),
    (_b[EU_TZ_CODE] = "Europe/Berlin"),
    _b)
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVRpbWVSYW5nZVBpY2tlci5jb25zdGFudHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXRpbWUtcmFuZ2UtcGlja2VyLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kYXRlVGltZVJhbmdlUGlja2VyL2RhdGVUaW1lUmFuZ2VQaWNrZXIuY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDOztJQUMxQixlQUFlLEdBQUcsS0FBSzs7SUFDdkIsV0FBVyxHQUFHLEtBQUs7O0lBQ25CLFVBQVUsR0FBRyxLQUFLOztBQUV4QixNQUFNLEtBQU8sd0JBQXdCLEdBQUc7SUFDdEMsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsWUFBWTtRQUN6QixXQUFXLEVBQUUsT0FBTztRQUNwQixVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN2QyxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ2YsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7YUFDbkIsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUNmLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDdkIsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDdkMsVUFBVSxFQUFFLE9BQU87UUFDbkIsUUFBUSxFQUFFLE9BQU87UUFDakIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztRQUNqRSxPQUFPLEVBQUUsZUFBZTtLQUN6QjtJQUNELFFBQVEsRUFBRTtRQUNSLGdCQUFnQixFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDdEcsZUFBZSxpQkFBQTtRQUNmLFdBQVcsYUFBQTtRQUNYLFVBQVUsWUFBQTtRQUNWLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUM7UUFDbkMsT0FBTztZQUNMLEdBQUMsV0FBVyxJQUFHO2dCQUNiLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsR0FBQyxVQUFVLElBQUc7Z0JBQ1osRUFBRSxFQUFFLENBQUM7Z0JBQ0wsRUFBRSxFQUFFLENBQUM7YUFDTjtlQUNGO1FBQ0QsUUFBUTtZQUNOLEdBQUMsZUFBZSxJQUFHLGlCQUFpQjtZQUNwQyxHQUFDLFdBQVcsSUFBRyxxQkFBcUI7WUFDcEMsR0FBQyxVQUFVLElBQUcsZUFBZTtlQUM5QjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgVVNBX01TVF9UWl9DT0RFID0gXCJNU1RcIjtcbmNvbnN0IFVTQV9UWl9DT0RFID0gXCJQU1RcIjtcbmNvbnN0IEVVX1RaX0NPREUgPSBcIkNFVFwiO1xuXG5leHBvcnQgY29uc3QgRGF0ZVJhbmdlUGlja2VyQ29uc3RhbnRzID0ge1xuICBERUZBVUxUOiB7XG4gICAgVFlQRTogXCJkYWlseVwiLFxuICAgIElOUFVUX0NMQVNTOiBcIm0xZHJwXCIsXG4gICAgREFURV9GUk9NQVQ6IFwiWVlZWS1NTS1ERFwiLFxuICAgIFRJTUVfRk9STUFUOiBcIkhIOm1tXCIsXG4gICAgU1RBUlRfREFURTogbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICBFTkRfREFURTogbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICBNSU5fREFURTogbW9tZW50KClcbiAgICAgIC5zdWJ0cmFjdCgyLCBcInllYXJcIilcbiAgICAgIC5zdGFydE9mKFwieWVhclwiKVxuICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgTUFYX0RBVEU6IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgU1RBUlRfVElNRTogXCIwMDowMFwiLFxuICAgIEVORF9USU1FOiBcIjIzOjU5XCIsXG4gICAgTU9ERUxfS0VZUzogW1wiZGFpbHlcIiwgXCJ3ZWVrbHlcIiwgXCJtb250aGx5XCIsIFwicXVhcnRlcmx5XCIsIFwieWVhcmx5XCJdLFxuICAgIFRaX0NPREU6IFVTQV9NU1RfVFpfQ09ERSxcbiAgfSxcbiAgQ09OU1RBTlQ6IHtcbiAgICBNT05USFNfQVZBSUxBQkxFOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgVVNBX01TVF9UWl9DT0RFLFxuICAgIFVTQV9UWl9DT0RFLFxuICAgIEVVX1RaX0NPREUsXG4gICAgVFpfQ09ERVM6IFtVU0FfVFpfQ09ERSwgRVVfVFpfQ09ERV0sXG4gICAgT0ZGU0VUUzoge1xuICAgICAgW1VTQV9UWl9DT0RFXToge1xuICAgICAgICBTTzogLTcsXG4gICAgICAgIFdPOiAtOCxcbiAgICAgIH0sXG4gICAgICBbRVVfVFpfQ09ERV06IHtcbiAgICAgICAgU086IDEsXG4gICAgICAgIFdPOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFRaX05BTUVTOiB7XG4gICAgICBbVVNBX01TVF9UWl9DT0RFXTogXCJBbWVyaWNhL1Bob2VuaXhcIixcbiAgICAgIFtVU0FfVFpfQ09ERV06IFwiQW1lcmljYS9Mb3NfQW5nZWxlc1wiLFxuICAgICAgW0VVX1RaX0NPREVdOiBcIkV1cm9wZS9CZXJsaW5cIixcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
