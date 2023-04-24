let interview_data_arr_raw = `[
    {
        "InterviewId": "4479",
        "InterviewEndDate": "2023-04-01 02:46:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3",
        "download_time": "24-04-2023 04:35:34"
    },
    {
        "InterviewId": "4480",
        "InterviewEndDate": "2023-04-01 02:52:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4481",
        "InterviewEndDate": "2023-04-01 03:14:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4482",
        "InterviewEndDate": "2023-04-01 03:18:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4483",
        "InterviewEndDate": "2023-04-01 03:28:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4484",
        "InterviewEndDate": "2023-04-01 13:52:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4485",
        "InterviewEndDate": "2023-04-01 13:58:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4486",
        "InterviewEndDate": "2023-04-01 14:02:57",
        "InterviewState": "Complete",
        "Flight": "RQ - Kam Air",
        "Dest": "KBL",
        "AirlineCode": "RQ",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4487",
        "InterviewEndDate": "2023-04-01 14:11:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4488",
        "InterviewEndDate": "2023-04-01 15:36:05",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "CTA",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4489",
        "InterviewEndDate": "2023-04-01 15:42:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4490",
        "InterviewEndDate": "2023-04-01 15:49:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4491",
        "InterviewEndDate": "2023-04-01 16:03:12",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4492",
        "InterviewEndDate": "2023-04-01 16:15:54",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4493",
        "InterviewEndDate": "2023-04-01 16:24:42",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4494",
        "InterviewEndDate": "2023-04-02 03:01:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4495",
        "InterviewEndDate": "2023-04-02 03:07:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4496",
        "InterviewEndDate": "2023-04-02 03:14:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4497",
        "InterviewEndDate": "2023-04-02 03:17:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4498",
        "InterviewEndDate": "2023-04-02 18:20:47",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4499",
        "InterviewEndDate": "2023-04-02 18:30:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SEZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4500",
        "InterviewEndDate": "2023-04-02 20:31:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4501",
        "InterviewEndDate": "2023-04-03 04:07:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4502",
        "InterviewEndDate": "2023-04-03 09:33:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4503",
        "InterviewEndDate": "2023-04-03 16:10:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4504",
        "InterviewEndDate": "2023-04-03 16:16:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4505",
        "InterviewEndDate": "2023-04-03 16:28:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4506",
        "InterviewEndDate": "2023-04-03 16:36:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4507",
        "InterviewEndDate": "2023-04-03 16:45:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4508",
        "InterviewEndDate": "2023-04-04 16:01:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4509",
        "InterviewEndDate": "2023-04-04 16:08:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4510",
        "InterviewEndDate": "2023-04-04 16:16:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4511",
        "InterviewEndDate": "2023-04-04 16:25:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4512",
        "InterviewEndDate": "2023-04-04 16:46:40",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KTW",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4514",
        "InterviewEndDate": "2023-04-04 16:55:09",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KTW",
        "AirlineCode": "W6",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4515",
        "InterviewEndDate": "2023-04-05 19:14:01",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4516",
        "InterviewEndDate": "2023-04-05 19:16:46",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4517",
        "InterviewEndDate": "2023-04-05 19:36:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4518",
        "InterviewEndDate": "2023-04-05 19:42:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4519",
        "InterviewEndDate": "2023-04-05 19:47:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4520",
        "InterviewEndDate": "2023-04-06 09:31:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4521",
        "InterviewEndDate": "2023-04-06 09:35:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4522",
        "InterviewEndDate": "2023-04-06 09:41:15",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4523",
        "InterviewEndDate": "2023-04-06 09:46:53",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4524",
        "InterviewEndDate": "2023-04-06 09:52:47",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4525",
        "InterviewEndDate": "2023-04-06 16:12:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4526",
        "InterviewEndDate": "2023-04-06 16:16:11",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4527",
        "InterviewEndDate": "2023-04-06 19:40:05",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4528",
        "InterviewEndDate": "2023-04-06 19:48:06",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4529",
        "InterviewEndDate": "2023-04-06 19:56:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4530",
        "InterviewEndDate": "2023-04-07 22:42:06",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4531",
        "InterviewEndDate": "2023-04-08 04:01:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4532",
        "InterviewEndDate": "2023-04-08 04:07:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4533",
        "InterviewEndDate": "2023-04-08 04:13:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4534",
        "InterviewEndDate": "2023-04-08 04:21:18",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4535",
        "InterviewEndDate": "2023-04-08 04:29:32",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4536",
        "InterviewEndDate": "2023-04-08 04:38:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4537",
        "InterviewEndDate": "2023-04-08 04:46:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4538",
        "InterviewEndDate": "2023-04-08 04:52:14",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4539",
        "InterviewEndDate": "2023-04-08 04:56:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4540",
        "InterviewEndDate": "2023-04-09 11:45:37",
        "InterviewState": "Complete",
        "Flight": "J4 - Badr Airlines",
        "Dest": "KRT",
        "AirlineCode": "J4",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4542",
        "InterviewEndDate": "2023-04-09 16:21:18",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4544",
        "InterviewEndDate": "2023-04-10 09:46:30",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4545",
        "InterviewEndDate": "2023-04-10 09:49:54",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4546",
        "InterviewEndDate": "2023-04-10 09:58:35",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4547",
        "InterviewEndDate": "2023-04-10 18:55:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SEZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4548",
        "InterviewEndDate": "2023-04-10 19:04:21",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4549",
        "InterviewEndDate": "2023-04-11 18:16:35",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "DME",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4550",
        "InterviewEndDate": "2023-04-11 02:47:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4551",
        "InterviewEndDate": "2023-04-11 02:51:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4552",
        "InterviewEndDate": "2023-04-11 02:55:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4553",
        "InterviewEndDate": "2023-04-11 03:09:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4554",
        "InterviewEndDate": "2023-04-11 03:17:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4555",
        "InterviewEndDate": "2023-04-11 03:24:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4556",
        "InterviewEndDate": "2023-04-12 03:32:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4557",
        "InterviewEndDate": "2023-04-12 03:36:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4558",
        "InterviewEndDate": "2023-04-12 08:59:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4559",
        "InterviewEndDate": "2023-04-12 09:06:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4560",
        "InterviewEndDate": "2023-04-13 19:30:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4561",
        "InterviewEndDate": "2023-04-13 19:34:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4562",
        "InterviewEndDate": "2023-04-13 19:40:15",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4563",
        "InterviewEndDate": "2023-04-14 09:27:42",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KUT",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4564",
        "InterviewEndDate": "2023-04-14 09:34:15",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KUT",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4565",
        "InterviewEndDate": "2023-04-14 19:14:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4566",
        "InterviewEndDate": "2023-04-14 19:20:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4567",
        "InterviewEndDate": "2023-04-14 19:26:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4568",
        "InterviewEndDate": "2023-04-15 18:53:08",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4569",
        "InterviewEndDate": "2023-04-15 18:57:00",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4570",
        "InterviewEndDate": "2023-04-15 19:03:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4571",
        "InterviewEndDate": "2023-04-15 19:07:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4572",
        "InterviewEndDate": "2023-04-15 19:14:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4573",
        "InterviewEndDate": "2023-04-17 18:32:43",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4574",
        "InterviewEndDate": "2023-04-18 19:07:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4575",
        "InterviewEndDate": "2023-04-18 19:15:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4576",
        "InterviewEndDate": "2023-04-18 19:22:53",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4577",
        "InterviewEndDate": "2023-04-18 19:29:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4578",
        "InterviewEndDate": "2023-04-18 19:38:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4579",
        "InterviewEndDate": "2023-04-19 02:54:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4580",
        "InterviewEndDate": "2023-04-19 03:13:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4581",
        "InterviewEndDate": "2023-04-19 03:21:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4582",
        "InterviewEndDate": "2023-04-19 03:25:50",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4583",
        "InterviewEndDate": "2023-04-20 03:02:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4584",
        "InterviewEndDate": "2023-04-20 03:10:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4585",
        "InterviewEndDate": "2023-04-20 03:18:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4586",
        "InterviewEndDate": "2023-04-20 03:26:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4587",
        "InterviewEndDate": "2023-04-20 03:33:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4588",
        "InterviewEndDate": "2023-04-20 03:38:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4590",
        "InterviewEndDate": "2023-04-23 14:48:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4591",
        "InterviewEndDate": "2023-04-23 14:53:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4592",
        "InterviewEndDate": "2023-04-23 15:00:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4593",
        "InterviewEndDate": "2023-04-23 15:05:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4594",
        "InterviewEndDate": "2023-04-23 15:10:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4595",
        "InterviewEndDate": "2023-04-23 15:15:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4596",
        "InterviewEndDate": "2023-04-23 16:07:27",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4597",
        "InterviewEndDate": "2023-04-23 16:14:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4598",
        "InterviewEndDate": "2023-04-23 16:21:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4599",
        "InterviewEndDate": "2023-04-23 16:32:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4600",
        "InterviewEndDate": "2023-04-23 18:59:36",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4601",
        "InterviewEndDate": "2023-04-23 19:03:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4602",
        "InterviewEndDate": "2023-04-23 19:07:11",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4603",
        "InterviewEndDate": "2023-04-23 19:15:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    }
]    

 `;