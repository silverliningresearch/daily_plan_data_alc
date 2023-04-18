let interview_data_arr_raw = `[
    {
        "InterviewId": "1223",
        "InterviewEndDate": "2023-04-08 12:48:18",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "download_time": "18-04-2023 08:34:12"
    },
    {
        "InterviewId": "1224",
        "InterviewEndDate": "2023-04-08 12:53:30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TLV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1225",
        "InterviewEndDate": "2023-04-08 12:58:21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TLV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1226",
        "InterviewEndDate": "2023-04-08 13:03:18",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1227",
        "InterviewEndDate": "2023-04-08 13:08:11",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1228",
        "InterviewEndDate": "2023-04-08 13:13:23",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1229",
        "InterviewEndDate": "2023-04-08 13:19:06",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1230",
        "InterviewEndDate": "2023-04-08 13:23:16",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1231",
        "InterviewEndDate": "2023-04-08 13:28:02",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1232",
        "InterviewEndDate": "2023-04-08 13:32:12",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1233",
        "InterviewEndDate": "2023-04-08 13:38:21",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1234",
        "InterviewEndDate": "2023-04-08 13:42:27",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1235",
        "InterviewEndDate": "2023-04-08 13:46:47",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1236",
        "InterviewEndDate": "2023-04-08 13:52:24",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1237",
        "InterviewEndDate": "2023-04-08 14:01:15",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1238",
        "InterviewEndDate": "2023-04-09 07:40:36",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1239",
        "InterviewEndDate": "2023-04-09 07:44:18",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1240",
        "InterviewEndDate": "2023-04-09 07:48:22",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1241",
        "InterviewEndDate": "2023-04-09 07:53:09",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1242",
        "InterviewEndDate": "2023-04-09 07:59:11",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1243",
        "InterviewEndDate": "2023-04-09 08:04:59",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1244",
        "InterviewEndDate": "2023-04-09 08:09:17",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1245",
        "InterviewEndDate": "2023-04-09 08:20:15",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "BER",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1246",
        "InterviewEndDate": "2023-04-09 08:25:38",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "BER",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1247",
        "InterviewEndDate": "2023-04-09 08:31:24",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "BER",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1248",
        "InterviewEndDate": "2023-04-09 08:38:08",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1249",
        "InterviewEndDate": "2023-04-09 08:42:06",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1250",
        "InterviewEndDate": "2023-04-09 08:46:05",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1251",
        "InterviewEndDate": "2023-04-09 08:53:11",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    }
]    

 `;