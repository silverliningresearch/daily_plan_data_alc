let interview_data_arr_raw = `[
    {
        "InterviewId": "3902",
        "InterviewEndDate": "2023-02-04 02:57:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3",
        "download_time": "28-12-2023 10:51:00"
    },
    {
        "InterviewId": "3906",
        "InterviewEndDate": "2023-01-31 09:44:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3907",
        "InterviewEndDate": "2023-01-31 09:51:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3908",
        "InterviewEndDate": "2023-01-31 09:59:02",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3909",
        "InterviewEndDate": "2023-01-31 10:10:50",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3910",
        "InterviewEndDate": "2023-01-31 14:30:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3911",
        "InterviewEndDate": "2023-01-31 14:37:52",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3912",
        "InterviewEndDate": "2023-01-31 14:49:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3913",
        "InterviewEndDate": "2023-01-31 15:04:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3914",
        "InterviewEndDate": "2023-01-31 15:15:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3915",
        "InterviewEndDate": "2023-01-31 15:13:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3916",
        "InterviewEndDate": "2023-01-31 16:13:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3917",
        "InterviewEndDate": "2023-01-31 16:18:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3918",
        "InterviewEndDate": "2023-02-01 16:55:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3919",
        "InterviewEndDate": "2023-02-01 16:57:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3920",
        "InterviewEndDate": "2023-02-01 17:06:58",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3921",
        "InterviewEndDate": "2023-02-01 19:45:02",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3922",
        "InterviewEndDate": "2023-02-01 19:51:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3923",
        "InterviewEndDate": "2023-02-01 19:56:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3924",
        "InterviewEndDate": "2023-02-01 22:37:02",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3925",
        "InterviewEndDate": "2023-02-01 22:43:13",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3926",
        "InterviewEndDate": "2023-02-02 08:02:19",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3927",
        "InterviewEndDate": "2023-02-02 08:23:57",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "MCT",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3928",
        "InterviewEndDate": "2023-02-02 08:49:54",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3929",
        "InterviewEndDate": "2023-02-02 09:09:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3930",
        "InterviewEndDate": "2023-02-02 14:46:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3931",
        "InterviewEndDate": "2023-02-02 14:53:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3932",
        "InterviewEndDate": "2023-02-02 14:59:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3933",
        "InterviewEndDate": "2023-02-02 15:08:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3934",
        "InterviewEndDate": "2023-02-02 16:53:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3935",
        "InterviewEndDate": "2023-02-02 22:12:36",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3937",
        "InterviewEndDate": "2023-02-02 22:20:06",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3938",
        "InterviewEndDate": "2023-02-03 02:46:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3939",
        "InterviewEndDate": "2023-02-03 02:52:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3940",
        "InterviewEndDate": "2023-02-03 03:21:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3941",
        "InterviewEndDate": "2023-02-03 07:25:11",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3942",
        "InterviewEndDate": "2023-02-03 08:38:39",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3943",
        "InterviewEndDate": "2023-02-03 14:41:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3944",
        "InterviewEndDate": "2023-02-03 14:47:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3945",
        "InterviewEndDate": "2023-02-03 14:55:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3946",
        "InterviewEndDate": "2023-02-03 15:03:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3947",
        "InterviewEndDate": "2023-02-03 15:14:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3948",
        "InterviewEndDate": "2023-02-03 15:26:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3949",
        "InterviewEndDate": "2023-02-03 22:39:48",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3950",
        "InterviewEndDate": "2023-02-04 03:16:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3951",
        "InterviewEndDate": "2023-02-04 03:34:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3952",
        "InterviewEndDate": "2023-02-04 22:39:53",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3953",
        "InterviewEndDate": "2023-02-04 22:47:13",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3954",
        "InterviewEndDate": "2023-02-05 02:49:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3955",
        "InterviewEndDate": "2023-02-05 02:53:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3956",
        "InterviewEndDate": "2023-02-05 02:55:37",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3957",
        "InterviewEndDate": "2023-02-05 03:03:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3958",
        "InterviewEndDate": "2023-02-05 03:14:08",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3960",
        "InterviewEndDate": "2023-02-05 05:46:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3961",
        "InterviewEndDate": "2023-02-05 05:49:29",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3963",
        "InterviewEndDate": "2023-02-05 06:12:36",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3964",
        "InterviewEndDate": "2023-02-06 02:56:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3965",
        "InterviewEndDate": "2023-02-06 03:02:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3966",
        "InterviewEndDate": "2023-02-06 03:09:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3967",
        "InterviewEndDate": "2023-02-06 03:14:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3968",
        "InterviewEndDate": "2023-02-06 03:21:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3969",
        "InterviewEndDate": "2023-02-06 03:30:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3970",
        "InterviewEndDate": "2023-02-06 14:42:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3972",
        "InterviewEndDate": "2023-02-07 02:31:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3973",
        "InterviewEndDate": "2023-02-07 03:30:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3974",
        "InterviewEndDate": "2023-02-07 03:35:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3975",
        "InterviewEndDate": "2023-02-07 03:45:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3977",
        "InterviewEndDate": "2023-02-07 18:13:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3978",
        "InterviewEndDate": "2023-02-07 19:47:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3979",
        "InterviewEndDate": "2023-02-08 03:06:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3980",
        "InterviewEndDate": "2023-02-08 03:14:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3981",
        "InterviewEndDate": "2023-02-08 03:19:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3982",
        "InterviewEndDate": "2023-02-08 03:29:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3983",
        "InterviewEndDate": "2023-02-08 03:55:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3984",
        "InterviewEndDate": "2023-02-08 03:54:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3985",
        "InterviewEndDate": "2023-02-08 04:11:53",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "3987",
        "InterviewEndDate": "2023-02-09 14:38:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3988",
        "InterviewEndDate": "2023-02-09 14:45:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3989",
        "InterviewEndDate": "2023-02-09 16:33:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3990",
        "InterviewEndDate": "2023-02-09 19:08:05",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3991",
        "InterviewEndDate": "2023-02-09 19:16:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3993",
        "InterviewEndDate": "2023-02-10 14:45:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3994",
        "InterviewEndDate": "2023-02-10 14:54:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3995",
        "InterviewEndDate": "2023-02-10 15:00:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3996",
        "InterviewEndDate": "2023-02-10 15:10:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3997",
        "InterviewEndDate": "2023-02-11 15:29:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "GVA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3998",
        "InterviewEndDate": "2023-02-11 15:35:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "3999",
        "InterviewEndDate": "2023-02-11 15:41:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4000",
        "InterviewEndDate": "2023-02-11 15:57:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4001",
        "InterviewEndDate": "2023-02-11 16:08:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4002",
        "InterviewEndDate": "2023-02-11 16:08:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4003",
        "InterviewEndDate": "2023-02-11 16:22:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4004",
        "InterviewEndDate": "2023-02-11 16:30:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JNB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4005",
        "InterviewEndDate": "2023-02-11 18:38:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4006",
        "InterviewEndDate": "2023-02-12 04:47:40",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4007",
        "InterviewEndDate": "2023-02-12 04:57:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4008",
        "InterviewEndDate": "2023-02-12 05:07:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4009",
        "InterviewEndDate": "2023-02-12 22:08:02",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4010",
        "InterviewEndDate": "2023-02-12 22:15:21",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4011",
        "InterviewEndDate": "2023-02-12 22:28:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4012",
        "InterviewEndDate": "2023-02-12 22:39:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4013",
        "InterviewEndDate": "2023-02-12 22:51:44",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4015",
        "InterviewEndDate": "2023-02-13 02:14:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4016",
        "InterviewEndDate": "2023-02-13 03:09:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4017",
        "InterviewEndDate": "2023-02-13 02:50:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4018",
        "InterviewEndDate": "2023-02-13 03:21:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4019",
        "InterviewEndDate": "2023-02-13 03:15:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4020",
        "InterviewEndDate": "2023-02-13 03:28:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4021",
        "InterviewEndDate": "2023-02-13 10:11:03",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4022",
        "InterviewEndDate": "2023-02-13 10:19:49",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4023",
        "InterviewEndDate": "2023-02-14 03:34:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4024",
        "InterviewEndDate": "2023-02-14 03:47:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4025",
        "InterviewEndDate": "2023-02-14 04:00:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4026",
        "InterviewEndDate": "2023-02-14 04:07:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4027",
        "InterviewEndDate": "2023-02-14 04:16:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4028",
        "InterviewEndDate": "2023-02-15 03:14:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4029",
        "InterviewEndDate": "2023-02-15 03:18:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4030",
        "InterviewEndDate": "2023-02-15 03:23:44",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4031",
        "InterviewEndDate": "2023-02-15 09:42:23",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4032",
        "InterviewEndDate": "2023-02-15 09:52:58",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4033",
        "InterviewEndDate": "2023-02-15 16:13:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4034",
        "InterviewEndDate": "2023-02-15 16:50:11",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4035",
        "InterviewEndDate": "2023-02-15 17:11:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4036",
        "InterviewEndDate": "2023-02-16 02:36:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4037",
        "InterviewEndDate": "2023-02-16 02:46:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4038",
        "InterviewEndDate": "2023-02-16 03:03:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4039",
        "InterviewEndDate": "2023-02-16 03:09:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4040",
        "InterviewEndDate": "2023-02-16 03:22:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4041",
        "InterviewEndDate": "2023-02-16 03:29:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4042",
        "InterviewEndDate": "2023-02-16 07:15:20",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4043",
        "InterviewEndDate": "2023-02-16 14:43:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4044",
        "InterviewEndDate": "2023-02-16 14:50:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4045",
        "InterviewEndDate": "2023-02-16 14:57:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4046",
        "InterviewEndDate": "2023-02-16 15:32:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4047",
        "InterviewEndDate": "2023-02-16 15:41:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4048",
        "InterviewEndDate": "2023-02-17 03:11:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4049",
        "InterviewEndDate": "2023-02-17 03:16:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4050",
        "InterviewEndDate": "2023-02-17 03:26:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4051",
        "InterviewEndDate": "2023-02-17 07:02:29",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4052",
        "InterviewEndDate": "2023-02-17 07:09:10",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4053",
        "InterviewEndDate": "2023-02-17 18:17:24",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4054",
        "InterviewEndDate": "2023-02-19 15:35:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4055",
        "InterviewEndDate": "2023-02-18 15:01:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4056",
        "InterviewEndDate": "2023-02-17 18:52:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "IST",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4057",
        "InterviewEndDate": "2023-02-17 18:58:59",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "IST",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4058",
        "InterviewEndDate": "2023-02-17 20:04:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "NRT",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4059",
        "InterviewEndDate": "2023-02-17 20:12:10",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KUT",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4061",
        "InterviewEndDate": "2023-02-18 15:05:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4062",
        "InterviewEndDate": "2023-02-18 16:11:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4063",
        "InterviewEndDate": "2023-02-18 16:20:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4064",
        "InterviewEndDate": "2023-02-18 20:34:07",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CCJ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4065",
        "InterviewEndDate": "2023-02-19 15:43:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4066",
        "InterviewEndDate": "2023-02-19 18:25:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4067",
        "InterviewEndDate": "2023-02-19 18:40:50",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "SAW",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4068",
        "InterviewEndDate": "2023-02-20 15:46:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4069",
        "InterviewEndDate": "2023-02-20 15:59:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4070",
        "InterviewEndDate": "2023-02-20 16:09:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4071",
        "InterviewEndDate": "2023-02-20 16:20:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4072",
        "InterviewEndDate": "2023-02-20 16:29:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4073",
        "InterviewEndDate": "2023-02-20 19:31:37",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4074",
        "InterviewEndDate": "2023-02-20 19:35:32",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4075",
        "InterviewEndDate": "2023-02-20 19:41:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4076",
        "InterviewEndDate": "2023-02-21 03:34:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4077",
        "InterviewEndDate": "2023-02-21 03:43:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4078",
        "InterviewEndDate": "2023-02-21 03:51:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4079",
        "InterviewEndDate": "2023-02-21 04:10:59",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4080",
        "InterviewEndDate": "2023-02-21 04:29:29",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4081",
        "InterviewEndDate": "2023-02-21 10:45:53",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4082",
        "InterviewEndDate": "2023-02-22 08:38:52",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4083",
        "InterviewEndDate": "2023-02-22 08:46:05",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4084",
        "InterviewEndDate": "2023-02-22 10:34:42",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4085",
        "InterviewEndDate": "2023-02-22 10:46:38",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4086",
        "InterviewEndDate": "2023-02-22 18:34:23",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "DME",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4087",
        "InterviewEndDate": "2023-02-25 03:11:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4088",
        "InterviewEndDate": "2023-02-23 02:50:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4089",
        "InterviewEndDate": "2023-02-23 02:53:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4090",
        "InterviewEndDate": "2023-02-23 03:00:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4091",
        "InterviewEndDate": "2023-02-23 03:10:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4092",
        "InterviewEndDate": "2023-02-23 03:18:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4093",
        "InterviewEndDate": "2023-02-23 03:26:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4094",
        "InterviewEndDate": "2023-02-23 03:34:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4095",
        "InterviewEndDate": "2023-02-23 03:41:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4096",
        "InterviewEndDate": "2023-02-23 03:41:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4097",
        "InterviewEndDate": "2023-02-23 07:13:18",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4098",
        "InterviewEndDate": "2023-02-23 07:18:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4099",
        "InterviewEndDate": "2023-02-23 10:03:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4100",
        "InterviewEndDate": "2023-02-23 10:06:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4101",
        "InterviewEndDate": "2023-02-23 10:12:16",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4103",
        "InterviewEndDate": "2023-02-23 10:17:55",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4104",
        "InterviewEndDate": "2023-02-23 10:24:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4106",
        "InterviewEndDate": "2023-02-23 16:31:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4107",
        "InterviewEndDate": "2023-02-23 16:45:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4108",
        "InterviewEndDate": "2023-02-23 16:54:28",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4109",
        "InterviewEndDate": "2023-02-23 21:40:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZNZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4110",
        "InterviewEndDate": "2023-02-23 21:47:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZNZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4111",
        "InterviewEndDate": "2023-02-23 21:54:55",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4112",
        "InterviewEndDate": "2023-02-23 22:00:13",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4113",
        "InterviewEndDate": "2023-02-23 22:13:22",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4114",
        "InterviewEndDate": "2023-02-23 22:19:08",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4115",
        "InterviewEndDate": "2023-02-23 22:25:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4116",
        "InterviewEndDate": "2023-02-23 22:34:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4117",
        "InterviewEndDate": "2023-02-24 03:17:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4118",
        "InterviewEndDate": "2023-02-24 03:18:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4119",
        "InterviewEndDate": "2023-02-24 03:26:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4120",
        "InterviewEndDate": "2023-02-24 03:33:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4122",
        "InterviewEndDate": "2023-02-24 03:37:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4123",
        "InterviewEndDate": "2023-02-24 03:42:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4124",
        "InterviewEndDate": "2023-02-24 09:29:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4125",
        "InterviewEndDate": "2023-02-24 09:42:38",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4126",
        "InterviewEndDate": "2023-02-24 09:47:00",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4127",
        "InterviewEndDate": "2023-02-24 09:54:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4128",
        "InterviewEndDate": "2023-02-24 09:59:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4129",
        "InterviewEndDate": "2023-02-24 10:00:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4130",
        "InterviewEndDate": "2023-02-24 10:05:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4131",
        "InterviewEndDate": "2023-02-24 10:30:35",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4132",
        "InterviewEndDate": "2023-02-24 10:38:02",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4133",
        "InterviewEndDate": "2023-02-24 15:22:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4134",
        "InterviewEndDate": "2023-02-24 15:36:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4135",
        "InterviewEndDate": "2023-02-24 15:44:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4136",
        "InterviewEndDate": "2023-02-24 15:54:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4137",
        "InterviewEndDate": "2023-02-24 16:07:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4138",
        "InterviewEndDate": "2023-02-24 16:21:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4139",
        "InterviewEndDate": "2023-02-24 16:31:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4140",
        "InterviewEndDate": "2023-02-24 16:42:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4141",
        "InterviewEndDate": "2023-02-24 16:58:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4142",
        "InterviewEndDate": "2023-02-24 17:05:51",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4143",
        "InterviewEndDate": "2023-02-24 17:13:38",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MCT",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4144",
        "InterviewEndDate": "2023-02-24 17:29:07",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4145",
        "InterviewEndDate": "2023-02-24 17:41:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4146",
        "InterviewEndDate": "2023-02-24 17:52:07",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "DME",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4147",
        "InterviewEndDate": "2023-02-24 18:04:59",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4148",
        "InterviewEndDate": "2023-02-25 03:16:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4149",
        "InterviewEndDate": "2023-02-25 03:22:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4150",
        "InterviewEndDate": "2023-02-25 03:29:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4151",
        "InterviewEndDate": "2023-02-25 03:33:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4152",
        "InterviewEndDate": "2023-02-25 09:34:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4153",
        "InterviewEndDate": "2023-02-25 09:40:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4154",
        "InterviewEndDate": "2023-02-25 09:45:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4155",
        "InterviewEndDate": "2023-02-25 09:51:39",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4156",
        "InterviewEndDate": "2023-02-25 09:57:07",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "MUX",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4158",
        "InterviewEndDate": "2023-02-25 18:54:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "PVG",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4159",
        "InterviewEndDate": "2023-02-25 19:01:26",
        "InterviewState": "Complete",
        "Flight": "UL - SriLankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4160",
        "InterviewEndDate": "2023-02-25 22:44:17",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4161",
        "InterviewEndDate": "2023-02-25 22:45:26",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4162",
        "InterviewEndDate": "2023-02-25 23:23:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4163",
        "InterviewEndDate": "2023-02-25 23:34:40",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4164",
        "InterviewEndDate": "2023-02-26 02:58:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4165",
        "InterviewEndDate": "2023-02-26 03:05:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4166",
        "InterviewEndDate": "2023-02-26 03:15:24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4167",
        "InterviewEndDate": "2023-02-26 03:19:34",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4168",
        "InterviewEndDate": "2023-02-26 03:25:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4169",
        "InterviewEndDate": "2023-02-26 03:32:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4170",
        "InterviewEndDate": "2023-02-26 09:37:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4171",
        "InterviewEndDate": "2023-02-26 09:44:09",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4172",
        "InterviewEndDate": "2023-02-26 09:47:46",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4173",
        "InterviewEndDate": "2023-02-26 09:52:47",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4174",
        "InterviewEndDate": "2023-02-26 10:00:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4175",
        "InterviewEndDate": "2023-02-26 10:13:16",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4176",
        "InterviewEndDate": "2023-02-26 10:20:42",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4177",
        "InterviewEndDate": "2023-02-26 10:30:50",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4178",
        "InterviewEndDate": "2023-02-26 23:28:30",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4179",
        "InterviewEndDate": "2023-02-26 23:34:29",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4180",
        "InterviewEndDate": "2023-02-26 23:40:16",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4181",
        "InterviewEndDate": "2023-02-27 00:39:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4182",
        "InterviewEndDate": "2023-02-27 00:44:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DAC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4183",
        "InterviewEndDate": "2023-02-27 02:41:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4184",
        "InterviewEndDate": "2023-02-27 02:47:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4185",
        "InterviewEndDate": "2023-02-27 02:54:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4186",
        "InterviewEndDate": "2023-02-27 03:03:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4187",
        "InterviewEndDate": "2023-02-27 03:13:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4188",
        "InterviewEndDate": "2023-02-27 03:19:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4189",
        "InterviewEndDate": "2023-02-27 03:31:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4190",
        "InterviewEndDate": "2023-02-27 03:42:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4191",
        "InterviewEndDate": "2023-02-27 09:52:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4192",
        "InterviewEndDate": "2023-02-27 09:57:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4193",
        "InterviewEndDate": "2023-02-27 10:10:58",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4194",
        "InterviewEndDate": "2023-02-27 10:15:32",
        "InterviewState": "Complete",
        "Flight": "MS - Egypt Air",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4195",
        "InterviewEndDate": "2023-02-27 15:12:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4196",
        "InterviewEndDate": "2023-02-27 15:23:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4197",
        "InterviewEndDate": "2023-02-27 15:31:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4198",
        "InterviewEndDate": "2023-02-27 15:40:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4199",
        "InterviewEndDate": "2023-02-27 15:47:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4200",
        "InterviewEndDate": "2023-02-27 15:56:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4201",
        "InterviewEndDate": "2023-02-27 16:03:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4202",
        "InterviewEndDate": "2023-02-27 16:12:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4203",
        "InterviewEndDate": "2023-02-27 16:21:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4204",
        "InterviewEndDate": "2023-02-27 16:33:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4205",
        "InterviewEndDate": "2023-02-28 02:23:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4206",
        "InterviewEndDate": "2023-02-28 02:30:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4207",
        "InterviewEndDate": "2023-02-28 02:39:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4208",
        "InterviewEndDate": "2023-02-28 02:46:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4209",
        "InterviewEndDate": "2023-02-28 02:55:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4210",
        "InterviewEndDate": "2023-02-28 03:00:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4211",
        "InterviewEndDate": "2023-02-28 03:07:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4213",
        "InterviewEndDate": "2023-02-28 03:14:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4214",
        "InterviewEndDate": "2023-02-28 03:20:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4215",
        "InterviewEndDate": "2023-02-28 03:23:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4216",
        "InterviewEndDate": "2023-02-28 03:28:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4217",
        "InterviewEndDate": "2023-02-28 07:16:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4219",
        "InterviewEndDate": "2023-02-28 09:16:30",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4220",
        "InterviewEndDate": "2023-02-28 09:26:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4221",
        "InterviewEndDate": "2023-02-28 09:31:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4222",
        "InterviewEndDate": "2023-02-28 09:38:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4223",
        "InterviewEndDate": "2023-02-28 09:47:02",
        "InterviewState": "Complete",
        "Flight": "SV - Saudi Arabian Airlines",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4225",
        "InterviewEndDate": "2023-03-03 12:26:46",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4226",
        "InterviewEndDate": "2023-03-03 12:41:57",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4229",
        "InterviewEndDate": "2023-03-04 09:28:42",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AQJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4230",
        "InterviewEndDate": "2023-03-04 09:46:03",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4231",
        "InterviewEndDate": "2023-03-05 09:31:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4232",
        "InterviewEndDate": "2023-03-05 09:52:36",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4233",
        "InterviewEndDate": "2023-03-06 02:48:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4234",
        "InterviewEndDate": "2023-03-06 02:59:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4235",
        "InterviewEndDate": "2023-03-06 03:04:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4236",
        "InterviewEndDate": "2023-03-06 03:19:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4237",
        "InterviewEndDate": "2023-03-06 15:59:06",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "NAP",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4238",
        "InterviewEndDate": "2023-03-06 16:12:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4239",
        "InterviewEndDate": "2023-03-06 19:55:31",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4240",
        "InterviewEndDate": "2023-03-07 02:39:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4241",
        "InterviewEndDate": "2023-03-07 02:46:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4242",
        "InterviewEndDate": "2023-03-07 02:56:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4243",
        "InterviewEndDate": "2023-03-07 03:16:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4244",
        "InterviewEndDate": "2023-03-07 09:57:33",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4245",
        "InterviewEndDate": "2023-03-07 10:05:16",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4246",
        "InterviewEndDate": "2023-03-08 14:57:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4247",
        "InterviewEndDate": "2023-03-08 15:04:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4248",
        "InterviewEndDate": "2023-03-08 15:14:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4249",
        "InterviewEndDate": "2023-03-08 15:21:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4250",
        "InterviewEndDate": "2023-03-09 20:03:36",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4251",
        "InterviewEndDate": "2023-03-09 20:12:06",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4252",
        "InterviewEndDate": "2023-03-09 20:22:04",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KUT",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4253",
        "InterviewEndDate": "2023-03-09 20:31:32",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KUT",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4254",
        "InterviewEndDate": "2023-03-09 20:37:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4255",
        "InterviewEndDate": "2023-03-09 20:48:27",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4256",
        "InterviewEndDate": "2023-03-09 20:54:57",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4257",
        "InterviewEndDate": "2023-03-11 10:01:44",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4258",
        "InterviewEndDate": "2023-03-11 10:15:57",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4260",
        "InterviewEndDate": "2023-03-14 03:02:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4261",
        "InterviewEndDate": "2023-03-14 03:06:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4262",
        "InterviewEndDate": "2023-03-14 03:14:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4263",
        "InterviewEndDate": "2023-03-14 03:48:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4264",
        "InterviewEndDate": "2023-03-14 03:55:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4265",
        "InterviewEndDate": "2023-03-14 15:35:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4266",
        "InterviewEndDate": "2023-03-14 15:41:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4267",
        "InterviewEndDate": "2023-03-15 03:03:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4268",
        "InterviewEndDate": "2023-03-14 16:15:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4269",
        "InterviewEndDate": "2023-03-14 16:21:35",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4270",
        "InterviewEndDate": "2023-03-14 16:36:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4271",
        "InterviewEndDate": "2023-03-14 18:22:21",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4272",
        "InterviewEndDate": "2023-03-15 03:16:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4273",
        "InterviewEndDate": "2023-03-15 03:23:42",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4274",
        "InterviewEndDate": "2023-03-15 03:33:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4283",
        "InterviewEndDate": "2023-03-16 02:29:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4284",
        "InterviewEndDate": "2023-03-16 02:35:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4285",
        "InterviewEndDate": "2023-03-16 02:50:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4286",
        "InterviewEndDate": "2023-03-16 02:55:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4287",
        "InterviewEndDate": "2023-03-16 03:05:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4288",
        "InterviewEndDate": "2023-03-16 03:16:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4289",
        "InterviewEndDate": "2023-03-16 03:26:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4290",
        "InterviewEndDate": "2023-03-16 14:23:10",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KRK",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4291",
        "InterviewEndDate": "2023-03-16 14:29:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4292",
        "InterviewEndDate": "2023-03-16 14:42:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4293",
        "InterviewEndDate": "2023-03-16 14:59:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4294",
        "InterviewEndDate": "2023-03-16 20:06:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4295",
        "InterviewEndDate": "2023-03-16 20:17:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4296",
        "InterviewEndDate": "2023-03-17 15:13:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4297",
        "InterviewEndDate": "2023-03-17 16:14:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4298",
        "InterviewEndDate": "2023-03-17 19:42:17",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4299",
        "InterviewEndDate": "2023-03-17 19:51:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4300",
        "InterviewEndDate": "2023-03-24 21:15:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4301",
        "InterviewEndDate": "2023-03-18 15:11:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4302",
        "InterviewEndDate": "2023-03-18 15:19:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4303",
        "InterviewEndDate": "2023-03-18 15:35:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4304",
        "InterviewEndDate": "2023-03-18 15:40:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4305",
        "InterviewEndDate": "2023-03-18 15:53:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4306",
        "InterviewEndDate": "2023-03-18 15:59:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4307",
        "InterviewEndDate": "2023-03-18 16:56:38",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4308",
        "InterviewEndDate": "2023-03-18 17:01:14",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4309",
        "InterviewEndDate": "2023-03-19 16:02:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4310",
        "InterviewEndDate": "2023-03-19 16:08:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4311",
        "InterviewEndDate": "2023-03-19 16:17:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4312",
        "InterviewEndDate": "2023-03-19 19:13:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4314",
        "InterviewEndDate": "2023-03-19 19:21:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4315",
        "InterviewEndDate": "2023-03-26 18:25:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4316",
        "InterviewEndDate": "2023-03-19 22:39:29",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "IXE",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4317",
        "InterviewEndDate": "2023-03-19 22:46:24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4318",
        "InterviewEndDate": "2023-03-21 16:11:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4319",
        "InterviewEndDate": "2023-03-21 16:34:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4320",
        "InterviewEndDate": "2023-03-21 16:43:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4321",
        "InterviewEndDate": "2023-03-21 16:53:14",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4322",
        "InterviewEndDate": "2023-03-21 17:03:47",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4323",
        "InterviewEndDate": "2023-03-21 17:11:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4324",
        "InterviewEndDate": "2023-03-21 17:21:05",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4325",
        "InterviewEndDate": "2023-03-22 22:20:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4326",
        "InterviewEndDate": "2023-03-22 22:27:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4327",
        "InterviewEndDate": "2023-03-23 02:47:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4328",
        "InterviewEndDate": "2023-03-23 02:54:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4329",
        "InterviewEndDate": "2023-03-23 02:57:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4330",
        "InterviewEndDate": "2023-03-23 03:05:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4331",
        "InterviewEndDate": "2023-03-23 03:11:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4332",
        "InterviewEndDate": "2023-03-23 03:19:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4333",
        "InterviewEndDate": "2023-03-23 03:22:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4334",
        "InterviewEndDate": "2023-03-23 14:23:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4335",
        "InterviewEndDate": "2023-03-23 14:31:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4336",
        "InterviewEndDate": "2023-03-23 14:39:30",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4337",
        "InterviewEndDate": "2023-03-23 14:48:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4339",
        "InterviewEndDate": "2023-03-24 02:45:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4340",
        "InterviewEndDate": "2023-03-24 02:54:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4341",
        "InterviewEndDate": "2023-03-24 03:02:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4342",
        "InterviewEndDate": "2023-03-24 03:12:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4343",
        "InterviewEndDate": "2023-03-24 03:23:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4344",
        "InterviewEndDate": "2023-03-24 08:44:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4345",
        "InterviewEndDate": "2023-03-24 08:53:25",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4346",
        "InterviewEndDate": "2023-03-24 08:56:00",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4347",
        "InterviewEndDate": "2023-03-25 02:56:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4348",
        "InterviewEndDate": "2023-03-25 03:00:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4349",
        "InterviewEndDate": "2023-03-25 03:08:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4350",
        "InterviewEndDate": "2023-03-25 03:25:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4351",
        "InterviewEndDate": "2023-03-25 17:33:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DAC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4352",
        "InterviewEndDate": "2023-03-25 17:42:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4353",
        "InterviewEndDate": "2023-03-25 17:53:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4354",
        "InterviewEndDate": "2023-03-25 17:59:27",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SAW",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4355",
        "InterviewEndDate": "2023-03-25 18:10:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4356",
        "InterviewEndDate": "2023-03-25 18:20:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "PVG",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4357",
        "InterviewEndDate": "2023-03-25 18:29:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4358",
        "InterviewEndDate": "2023-03-26 10:19:46",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TAS",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4359",
        "InterviewEndDate": "2023-03-26 10:26:49",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TAS",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4360",
        "InterviewEndDate": "2023-03-26 10:33:24",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4361",
        "InterviewEndDate": "2023-03-26 10:41:00",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4362",
        "InterviewEndDate": "2023-03-26 10:46:00",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4363",
        "InterviewEndDate": "2023-03-26 15:43:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4364",
        "InterviewEndDate": "2023-03-26 15:52:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4365",
        "InterviewEndDate": "2023-03-26 16:00:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4366",
        "InterviewEndDate": "2023-03-26 16:11:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4367",
        "InterviewEndDate": "2023-03-26 16:12:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4368",
        "InterviewEndDate": "2023-03-26 16:19:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4369",
        "InterviewEndDate": "2023-03-26 16:19:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4370",
        "InterviewEndDate": "2023-03-26 16:27:16",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4371",
        "InterviewEndDate": "2023-03-26 16:32:42",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4372",
        "InterviewEndDate": "2023-03-26 16:36:31",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "CLJ",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4373",
        "InterviewEndDate": "2023-03-26 16:44:28",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KTW",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4375",
        "InterviewEndDate": "2023-03-26 16:53:07",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "FCO",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4377",
        "InterviewEndDate": "2023-03-26 16:58:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4378",
        "InterviewEndDate": "2023-03-26 17:03:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4379",
        "InterviewEndDate": "2023-03-26 18:51:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4380",
        "InterviewEndDate": "2023-03-26 19:02:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4381",
        "InterviewEndDate": "2023-03-26 19:13:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4382",
        "InterviewEndDate": "2023-03-26 19:16:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4383",
        "InterviewEndDate": "2023-03-26 19:22:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4384",
        "InterviewEndDate": "2023-03-27 06:59:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4385",
        "InterviewEndDate": "2023-03-27 07:06:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4386",
        "InterviewEndDate": "2023-03-27 07:13:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4387",
        "InterviewEndDate": "2023-03-27 07:30:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4388",
        "InterviewEndDate": "2023-03-27 07:44:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4389",
        "InterviewEndDate": "2023-03-27 10:21:25",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4390",
        "InterviewEndDate": "2023-03-27 10:26:46",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4391",
        "InterviewEndDate": "2023-03-27 10:35:37",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TAS",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4392",
        "InterviewEndDate": "2023-03-27 10:40:31",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4393",
        "InterviewEndDate": "2023-03-27 15:45:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4394",
        "InterviewEndDate": "2023-03-27 15:51:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4395",
        "InterviewEndDate": "2023-03-27 15:55:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4396",
        "InterviewEndDate": "2023-03-27 15:58:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4397",
        "InterviewEndDate": "2023-03-27 16:29:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4398",
        "InterviewEndDate": "2023-03-27 16:31:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4399",
        "InterviewEndDate": "2023-03-27 16:37:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4400",
        "InterviewEndDate": "2023-03-27 19:03:27",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4401",
        "InterviewEndDate": "2023-03-27 19:11:13",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4402",
        "InterviewEndDate": "2023-03-27 19:20:17",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4403",
        "InterviewEndDate": "2023-03-27 19:18:32",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4405",
        "InterviewEndDate": "2023-03-27 19:34:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4406",
        "InterviewEndDate": "2023-03-27 19:28:33",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4407",
        "InterviewEndDate": "2023-03-28 07:23:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4408",
        "InterviewEndDate": "2023-03-28 07:29:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4409",
        "InterviewEndDate": "2023-03-28 07:38:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4410",
        "InterviewEndDate": "2023-03-28 15:59:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4411",
        "InterviewEndDate": "2023-03-28 16:06:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4412",
        "InterviewEndDate": "2023-03-28 16:11:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4413",
        "InterviewEndDate": "2023-03-28 16:15:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4414",
        "InterviewEndDate": "2023-03-29 19:05:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4415",
        "InterviewEndDate": "2023-03-28 19:00:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4416",
        "InterviewEndDate": "2023-03-28 19:04:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4417",
        "InterviewEndDate": "2023-03-28 19:09:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4418",
        "InterviewEndDate": "2023-03-28 19:13:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4419",
        "InterviewEndDate": "2023-03-28 19:18:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4420",
        "InterviewEndDate": "2023-03-28 19:24:57",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4421",
        "InterviewEndDate": "2023-03-28 19:27:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4422",
        "InterviewEndDate": "2023-03-28 19:30:46",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4423",
        "InterviewEndDate": "2023-03-28 19:33:14",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4424",
        "InterviewEndDate": "2023-03-28 19:37:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4425",
        "InterviewEndDate": "2023-03-30 02:36:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4426",
        "InterviewEndDate": "2023-03-30 02:40:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4427",
        "InterviewEndDate": "2023-03-30 02:45:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4428",
        "InterviewEndDate": "2023-03-30 02:59:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4429",
        "InterviewEndDate": "2023-03-30 03:04:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4430",
        "InterviewEndDate": "2023-03-30 03:08:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4431",
        "InterviewEndDate": "2023-03-30 03:12:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4432",
        "InterviewEndDate": "2023-03-30 03:16:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4433",
        "InterviewEndDate": "2023-03-30 03:20:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4434",
        "InterviewEndDate": "2023-03-30 03:26:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4435",
        "InterviewEndDate": "2023-03-30 03:34:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4436",
        "InterviewEndDate": "2023-03-30 03:38:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4437",
        "InterviewEndDate": "2023-03-30 03:48:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4438",
        "InterviewEndDate": "2023-03-30 03:53:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4439",
        "InterviewEndDate": "2023-03-30 03:58:38",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4440",
        "InterviewEndDate": "2023-03-30 03:59:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4441",
        "InterviewEndDate": "2023-03-30 04:06:17",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4442",
        "InterviewEndDate": "2023-03-30 07:06:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4443",
        "InterviewEndDate": "2023-03-30 07:11:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4444",
        "InterviewEndDate": "2023-03-30 08:42:36",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4445",
        "InterviewEndDate": "2023-03-30 08:47:12",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4446",
        "InterviewEndDate": "2023-03-30 09:01:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4447",
        "InterviewEndDate": "2023-03-30 09:04:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4448",
        "InterviewEndDate": "2023-03-30 09:11:44",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4449",
        "InterviewEndDate": "2023-03-30 12:00:23",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4450",
        "InterviewEndDate": "2023-03-30 12:06:19",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4451",
        "InterviewEndDate": "2023-03-30 12:11:31",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4452",
        "InterviewEndDate": "2023-03-30 12:29:00",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KWI",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4453",
        "InterviewEndDate": "2023-03-30 12:32:58",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KWI",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4454",
        "InterviewEndDate": "2023-03-30 18:01:22",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4455",
        "InterviewEndDate": "2023-03-30 21:11:11",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4456",
        "InterviewEndDate": "2023-03-30 18:11:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4457",
        "InterviewEndDate": "2023-03-30 18:29:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4458",
        "InterviewEndDate": "2023-03-31 15:12:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4459",
        "InterviewEndDate": "2023-03-30 21:27:56",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4460",
        "InterviewEndDate": "2023-03-30 21:33:51",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CCJ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4461",
        "InterviewEndDate": "2023-03-31 02:49:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4462",
        "InterviewEndDate": "2023-03-31 02:57:42",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4463",
        "InterviewEndDate": "2023-03-31 03:02:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4464",
        "InterviewEndDate": "2023-03-31 03:08:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4465",
        "InterviewEndDate": "2023-03-31 03:15:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4466",
        "InterviewEndDate": "2023-03-31 14:58:59",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4467",
        "InterviewEndDate": "2023-03-31 14:58:47",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4468",
        "InterviewEndDate": "2023-03-31 15:21:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4469",
        "InterviewEndDate": "2023-03-31 15:30:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4470",
        "InterviewEndDate": "2023-03-31 15:43:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4471",
        "InterviewEndDate": "2023-03-31 15:57:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4472",
        "InterviewEndDate": "2023-03-31 16:16:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4473",
        "InterviewEndDate": "2023-03-31 19:37:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4474",
        "InterviewEndDate": "2023-03-31 19:41:29",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4475",
        "InterviewEndDate": "2023-03-31 19:51:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4476",
        "InterviewEndDate": "2023-03-31 19:57:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4477",
        "InterviewEndDate": "2023-03-31 20:01:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4478",
        "InterviewEndDate": "2023-03-31 20:15:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4479",
        "InterviewEndDate": "2023-04-01 02:46:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
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
        "InterviewEndDate": "2023-04-25 22:36:54",
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
    },
    {
        "InterviewId": "4604",
        "InterviewEndDate": "2023-04-24 15:11:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4605",
        "InterviewEndDate": "2023-04-24 15:15:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4606",
        "InterviewEndDate": "2023-04-24 16:02:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4607",
        "InterviewEndDate": "2023-04-24 16:06:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4608",
        "InterviewEndDate": "2023-04-24 16:11:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4609",
        "InterviewEndDate": "2023-04-24 16:15:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4610",
        "InterviewEndDate": "2023-04-24 16:22:34",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4611",
        "InterviewEndDate": "2023-04-24 16:24:08",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4612",
        "InterviewEndDate": "2023-04-24 16:29:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4613",
        "InterviewEndDate": "2023-04-24 19:25:24",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4614",
        "InterviewEndDate": "2023-04-24 19:27:59",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4615",
        "InterviewEndDate": "2023-04-24 19:34:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4616",
        "InterviewEndDate": "2023-04-24 19:39:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4617",
        "InterviewEndDate": "2023-04-25 16:49:41",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4618",
        "InterviewEndDate": "2023-04-25 16:59:13",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4619",
        "InterviewEndDate": "2023-04-25 21:48:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4620",
        "InterviewEndDate": "2023-04-25 21:54:47",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4621",
        "InterviewEndDate": "2023-04-25 22:03:36",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4622",
        "InterviewEndDate": "2023-04-25 22:12:21",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SLL",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4623",
        "InterviewEndDate": "2023-04-25 22:21:21",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4624",
        "InterviewEndDate": "2023-04-25 22:28:50",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4626",
        "InterviewEndDate": "2023-04-25 22:41:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4627",
        "InterviewEndDate": "2023-04-26 10:32:43",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TAS",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4628",
        "InterviewEndDate": "2023-04-27 03:01:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4629",
        "InterviewEndDate": "2023-04-27 03:17:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4630",
        "InterviewEndDate": "2023-04-27 03:25:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4631",
        "InterviewEndDate": "2023-04-27 03:44:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4633",
        "InterviewEndDate": "2023-04-27 11:15:26",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4634",
        "InterviewEndDate": "2023-04-27 11:27:41",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4635",
        "InterviewEndDate": "2023-04-28 01:51:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4637",
        "InterviewEndDate": "2023-04-28 01:56:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4638",
        "InterviewEndDate": "2023-04-28 02:02:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4639",
        "InterviewEndDate": "2023-04-28 02:06:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4640",
        "InterviewEndDate": "2023-04-28 02:13:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4641",
        "InterviewEndDate": "2023-04-28 02:22:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4642",
        "InterviewEndDate": "2023-04-28 02:33:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4643",
        "InterviewEndDate": "2023-04-28 02:41:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4644",
        "InterviewEndDate": "2023-04-28 03:25:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4645",
        "InterviewEndDate": "2023-04-28 03:31:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4646",
        "InterviewEndDate": "2023-04-28 06:36:06",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4647",
        "InterviewEndDate": "2023-04-28 06:42:36",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4648",
        "InterviewEndDate": "2023-04-28 06:44:56",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4649",
        "InterviewEndDate": "2023-04-28 15:07:08",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4650",
        "InterviewEndDate": "2023-04-28 15:13:53",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4651",
        "InterviewEndDate": "2023-04-29 02:19:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4652",
        "InterviewEndDate": "2023-04-29 02:22:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4653",
        "InterviewEndDate": "2023-04-29 03:00:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4654",
        "InterviewEndDate": "2023-04-29 02:40:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4655",
        "InterviewEndDate": "2023-04-29 02:46:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4656",
        "InterviewEndDate": "2023-04-29 02:51:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4657",
        "InterviewEndDate": "2023-04-29 03:03:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4658",
        "InterviewEndDate": "2023-04-29 03:05:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4659",
        "InterviewEndDate": "2023-04-29 03:11:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4660",
        "InterviewEndDate": "2023-04-29 03:17:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4661",
        "InterviewEndDate": "2023-04-29 03:27:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4662",
        "InterviewEndDate": "2023-04-29 10:06:32",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4663",
        "InterviewEndDate": "2023-04-29 10:04:49",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4664",
        "InterviewEndDate": "2023-04-29 10:11:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MUX",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4665",
        "InterviewEndDate": "2023-04-29 10:09:40",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MUX",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4666",
        "InterviewEndDate": "2023-04-29 10:25:37",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4667",
        "InterviewEndDate": "2023-04-29 11:27:43",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4668",
        "InterviewEndDate": "2023-04-29 11:33:43",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4669",
        "InterviewEndDate": "2023-04-30 02:44:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4670",
        "InterviewEndDate": "2023-04-30 02:47:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4671",
        "InterviewEndDate": "2023-04-30 02:53:17",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4672",
        "InterviewEndDate": "2023-04-30 02:58:15",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4673",
        "InterviewEndDate": "2023-04-30 03:01:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4674",
        "InterviewEndDate": "2023-04-30 03:04:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4675",
        "InterviewEndDate": "2023-04-30 03:10:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4676",
        "InterviewEndDate": "2023-04-30 03:12:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4677",
        "InterviewEndDate": "2023-04-30 03:19:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4678",
        "InterviewEndDate": "2023-04-30 03:23:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4679",
        "InterviewEndDate": "2023-04-30 03:25:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4680",
        "InterviewEndDate": "2023-04-30 03:30:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4681",
        "InterviewEndDate": "2023-04-30 09:37:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4682",
        "InterviewEndDate": "2023-04-30 09:39:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4683",
        "InterviewEndDate": "2023-04-30 09:41:53",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "PEW",
        "AirlineCode": "PK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4684",
        "InterviewEndDate": "2023-04-30 09:43:18",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "PEW",
        "AirlineCode": "PK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4685",
        "InterviewEndDate": "2023-04-30 09:48:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4686",
        "InterviewEndDate": "2023-04-30 09:52:00",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4687",
        "InterviewEndDate": "2023-04-30 09:53:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4688",
        "InterviewEndDate": "2023-04-30 10:52:27",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4689",
        "InterviewEndDate": "2023-04-30 11:11:04",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4690",
        "InterviewEndDate": "2023-04-30 11:14:54",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4691",
        "InterviewEndDate": "2023-04-30 11:17:34",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4692",
        "InterviewEndDate": "2023-04-30 11:20:05",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4693",
        "InterviewEndDate": "2023-04-30 11:23:32",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4694",
        "InterviewEndDate": "2023-04-30 11:25:25",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4695",
        "InterviewEndDate": "2023-04-30 11:28:29",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRZ",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4696",
        "InterviewEndDate": "2023-04-30 12:29:00",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4697",
        "InterviewEndDate": "2023-04-30 12:32:52",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4698",
        "InterviewEndDate": "2023-04-30 12:35:38",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4699",
        "InterviewEndDate": "2023-04-30 14:31:05",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4700",
        "InterviewEndDate": "2023-04-30 14:37:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4701",
        "InterviewEndDate": "2023-04-30 14:46:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4702",
        "InterviewEndDate": "2023-04-30 14:51:07",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4703",
        "InterviewEndDate": "2023-04-30 15:08:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4704",
        "InterviewEndDate": "2023-04-30 15:16:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4705",
        "InterviewEndDate": "2023-04-30 16:29:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4706",
        "InterviewEndDate": "2023-04-30 16:34:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4707",
        "InterviewEndDate": "2023-04-30 16:41:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4708",
        "InterviewEndDate": "2023-04-30 16:47:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4709",
        "InterviewEndDate": "2023-04-30 16:53:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4710",
        "InterviewEndDate": "2023-04-30 16:57:16",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BUD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4711",
        "InterviewEndDate": "2023-04-30 17:02:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KTW",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4712",
        "InterviewEndDate": "2023-04-30 17:07:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JNB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4713",
        "InterviewEndDate": "2023-04-30 17:15:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4714",
        "InterviewEndDate": "2023-04-30 17:20:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4715",
        "InterviewEndDate": "2023-04-30 18:15:42",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SAW",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4716",
        "InterviewEndDate": "2023-04-30 18:22:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4717",
        "InterviewEndDate": "2023-04-30 18:30:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4718",
        "InterviewEndDate": "2023-04-30 18:37:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4719",
        "InterviewEndDate": "2023-04-30 18:45:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4720",
        "InterviewEndDate": "2023-04-30 19:20:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4721",
        "InterviewEndDate": "2023-04-30 19:24:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4722",
        "InterviewEndDate": "2023-04-30 19:28:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4723",
        "InterviewEndDate": "2023-04-30 19:34:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4724",
        "InterviewEndDate": "2023-04-30 19:41:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4725",
        "InterviewEndDate": "2023-04-30 19:45:02",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4726",
        "InterviewEndDate": "2023-04-30 19:49:09",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4727",
        "InterviewEndDate": "2023-04-30 19:57:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4728",
        "InterviewEndDate": "2023-04-30 20:01:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4729",
        "InterviewEndDate": "2023-05-01 15:43:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4730",
        "InterviewEndDate": "2023-05-01 15:53:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4731",
        "InterviewEndDate": "2023-05-01 16:02:15",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4732",
        "InterviewEndDate": "2023-05-01 16:15:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4733",
        "InterviewEndDate": "2023-05-01 16:21:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4734",
        "InterviewEndDate": "2023-05-01 16:24:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4735",
        "InterviewEndDate": "2023-05-01 16:28:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TRV",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4736",
        "InterviewEndDate": "2023-05-01 16:34:27",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4738",
        "InterviewEndDate": "2023-05-01 16:39:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4739",
        "InterviewEndDate": "2023-05-02 19:10:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4740",
        "InterviewEndDate": "2023-05-02 19:25:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4741",
        "InterviewEndDate": "2023-05-02 19:30:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4742",
        "InterviewEndDate": "2023-05-03 16:12:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4743",
        "InterviewEndDate": "2023-05-03 16:18:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4744",
        "InterviewEndDate": "2023-05-03 16:23:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4745",
        "InterviewEndDate": "2023-05-03 16:31:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4746",
        "InterviewEndDate": "2023-05-03 19:18:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CCJ",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4747",
        "InterviewEndDate": "2023-05-03 19:22:15",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4748",
        "InterviewEndDate": "2023-05-03 19:26:40",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4749",
        "InterviewEndDate": "2023-05-04 01:46:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4750",
        "InterviewEndDate": "2023-05-04 01:53:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4751",
        "InterviewEndDate": "2023-05-04 01:59:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4752",
        "InterviewEndDate": "2023-05-04 02:11:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4753",
        "InterviewEndDate": "2023-05-04 02:16:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4754",
        "InterviewEndDate": "2023-05-04 02:20:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4755",
        "InterviewEndDate": "2023-05-04 03:46:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4756",
        "InterviewEndDate": "2023-05-04 03:58:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4758",
        "InterviewEndDate": "2023-05-04 07:59:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4759",
        "InterviewEndDate": "2023-05-04 12:37:09",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4760",
        "InterviewEndDate": "2023-05-04 12:47:22",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4761",
        "InterviewEndDate": "2023-05-04 14:36:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4762",
        "InterviewEndDate": "2023-05-04 14:47:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4763",
        "InterviewEndDate": "2023-05-04 14:56:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4764",
        "InterviewEndDate": "2023-05-04 15:17:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4765",
        "InterviewEndDate": "2023-05-04 15:23:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4766",
        "InterviewEndDate": "2023-05-04 15:32:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4767",
        "InterviewEndDate": "2023-05-04 15:40:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4769",
        "InterviewEndDate": "2023-05-05 15:14:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4770",
        "InterviewEndDate": "2023-05-06 15:13:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4771",
        "InterviewEndDate": "2023-05-06 15:20:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4772",
        "InterviewEndDate": "2023-05-06 15:27:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4773",
        "InterviewEndDate": "2023-05-07 02:19:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4774",
        "InterviewEndDate": "2023-05-07 02:29:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4775",
        "InterviewEndDate": "2023-05-07 02:38:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4776",
        "InterviewEndDate": "2023-05-07 02:44:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4777",
        "InterviewEndDate": "2023-05-07 05:57:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4778",
        "InterviewEndDate": "2023-05-07 09:02:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "EVN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4779",
        "InterviewEndDate": "2023-05-07 09:08:08",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4780",
        "InterviewEndDate": "2023-05-07 09:11:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4781",
        "InterviewEndDate": "2023-05-08 02:52:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4782",
        "InterviewEndDate": "2023-05-08 02:57:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4783",
        "InterviewEndDate": "2023-05-08 03:03:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4784",
        "InterviewEndDate": "2023-05-08 03:16:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4785",
        "InterviewEndDate": "2023-05-08 15:15:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4786",
        "InterviewEndDate": "2023-05-08 15:31:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4787",
        "InterviewEndDate": "2023-05-08 15:42:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BRU",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4788",
        "InterviewEndDate": "2023-05-08 16:02:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "GVA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4789",
        "InterviewEndDate": "2023-05-08 16:11:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4790",
        "InterviewEndDate": "2023-05-09 04:10:50",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4791",
        "InterviewEndDate": "2023-05-09 04:14:21",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4792",
        "InterviewEndDate": "2023-05-09 09:38:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4793",
        "InterviewEndDate": "2023-05-09 09:40:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4794",
        "InterviewEndDate": "2023-05-09 10:52:29",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4795",
        "InterviewEndDate": "2023-05-09 14:38:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4796",
        "InterviewEndDate": "2023-05-09 14:44:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4797",
        "InterviewEndDate": "2023-05-09 14:53:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4798",
        "InterviewEndDate": "2023-05-09 15:19:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4799",
        "InterviewEndDate": "2023-05-09 15:36:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4800",
        "InterviewEndDate": "2023-05-10 15:27:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4801",
        "InterviewEndDate": "2023-05-10 15:37:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4802",
        "InterviewEndDate": "2023-05-10 15:42:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4803",
        "InterviewEndDate": "2023-05-10 15:48:42",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4804",
        "InterviewEndDate": "2023-05-10 15:55:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4805",
        "InterviewEndDate": "2023-05-10 15:59:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4806",
        "InterviewEndDate": "2023-05-10 16:14:49",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4807",
        "InterviewEndDate": "2023-05-10 16:16:37",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4808",
        "InterviewEndDate": "2023-05-10 16:20:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4809",
        "InterviewEndDate": "2023-05-10 19:13:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4810",
        "InterviewEndDate": "2023-05-10 19:27:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4811",
        "InterviewEndDate": "2023-05-11 15:20:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4812",
        "InterviewEndDate": "2023-05-11 15:29:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4813",
        "InterviewEndDate": "2023-05-11 16:23:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4814",
        "InterviewEndDate": "2023-05-11 16:28:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4815",
        "InterviewEndDate": "2023-05-11 19:13:31",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4816",
        "InterviewEndDate": "2023-05-11 19:18:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4817",
        "InterviewEndDate": "2023-05-11 19:25:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4818",
        "InterviewEndDate": "2023-05-12 15:12:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4819",
        "InterviewEndDate": "2023-05-12 15:51:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JNB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4820",
        "InterviewEndDate": "2023-05-12 16:05:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4821",
        "InterviewEndDate": "2023-05-12 16:04:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4822",
        "InterviewEndDate": "2023-05-12 16:10:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4823",
        "InterviewEndDate": "2023-05-12 19:19:48",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4824",
        "InterviewEndDate": "2023-05-12 19:26:23",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4825",
        "InterviewEndDate": "2023-05-12 19:31:33",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4826",
        "InterviewEndDate": "2023-05-13 03:37:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4827",
        "InterviewEndDate": "2023-05-13 11:02:45",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KWI",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4828",
        "InterviewEndDate": "2023-05-13 11:17:09",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4829",
        "InterviewEndDate": "2023-05-13 11:26:59",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4830",
        "InterviewEndDate": "2023-05-13 11:36:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4831",
        "InterviewEndDate": "2023-05-13 15:57:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4832",
        "InterviewEndDate": "2023-05-13 16:06:12",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "SOF",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4833",
        "InterviewEndDate": "2023-05-13 16:14:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4834",
        "InterviewEndDate": "2023-05-13 16:22:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4835",
        "InterviewEndDate": "2023-05-13 16:34:54",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4836",
        "InterviewEndDate": "2023-05-13 16:44:18",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4837",
        "InterviewEndDate": "2023-05-13 16:57:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4838",
        "InterviewEndDate": "2023-05-13 22:20:31",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4839",
        "InterviewEndDate": "2023-05-13 22:26:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4840",
        "InterviewEndDate": "2023-05-13 22:34:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4841",
        "InterviewEndDate": "2023-05-13 22:38:57",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MLE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4842",
        "InterviewEndDate": "2023-05-14 01:47:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4843",
        "InterviewEndDate": "2023-05-14 01:52:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4844",
        "InterviewEndDate": "2023-05-14 02:00:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4845",
        "InterviewEndDate": "2023-05-14 02:16:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4846",
        "InterviewEndDate": "2023-05-14 02:31:49",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4847",
        "InterviewEndDate": "2023-05-14 04:47:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4848",
        "InterviewEndDate": "2023-05-14 07:43:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4849",
        "InterviewEndDate": "2023-05-14 07:49:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4850",
        "InterviewEndDate": "2023-05-14 14:45:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4851",
        "InterviewEndDate": "2023-05-14 14:52:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4852",
        "InterviewEndDate": "2023-05-14 14:56:34",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4853",
        "InterviewEndDate": "2023-05-14 15:02:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "GVA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4854",
        "InterviewEndDate": "2023-05-14 15:08:01",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SLL",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4855",
        "InterviewEndDate": "2023-05-14 15:13:17",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SLL",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4856",
        "InterviewEndDate": "2023-05-14 15:19:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4857",
        "InterviewEndDate": "2023-05-14 15:28:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4858",
        "InterviewEndDate": "2023-05-14 21:20:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4859",
        "InterviewEndDate": "2023-05-15 08:17:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4860",
        "InterviewEndDate": "2023-05-15 08:21:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4861",
        "InterviewEndDate": "2023-05-15 08:25:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4862",
        "InterviewEndDate": "2023-05-15 08:35:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4863",
        "InterviewEndDate": "2023-05-17 02:36:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4864",
        "InterviewEndDate": "2023-05-17 02:40:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4865",
        "InterviewEndDate": "2023-05-17 02:46:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4866",
        "InterviewEndDate": "2023-05-17 02:53:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4867",
        "InterviewEndDate": "2023-05-18 03:02:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4868",
        "InterviewEndDate": "2023-05-18 03:08:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4869",
        "InterviewEndDate": "2023-05-18 09:52:22",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4870",
        "InterviewEndDate": "2023-05-18 09:55:01",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4872",
        "InterviewEndDate": "2023-05-18 17:35:23",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4873",
        "InterviewEndDate": "2023-05-18 17:40:06",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4874",
        "InterviewEndDate": "2023-05-18 17:44:03",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4875",
        "InterviewEndDate": "2023-05-18 17:55:09",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4876",
        "InterviewEndDate": "2023-05-18 18:12:05",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4878",
        "InterviewEndDate": "2023-05-19 02:46:52",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4879",
        "InterviewEndDate": "2023-05-19 08:42:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SLL",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4880",
        "InterviewEndDate": "2023-05-19 08:46:23",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AQJ",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4881",
        "InterviewEndDate": "2023-05-19 08:52:36",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4882",
        "InterviewEndDate": "2023-05-19 08:58:52",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4883",
        "InterviewEndDate": "2023-05-19 09:26:30",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4885",
        "InterviewEndDate": "2023-05-19 09:36:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4886",
        "InterviewEndDate": "2023-05-19 14:44:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4887",
        "InterviewEndDate": "2023-05-19 14:49:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4888",
        "InterviewEndDate": "2023-05-19 16:15:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4889",
        "InterviewEndDate": "2023-05-19 16:23:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4890",
        "InterviewEndDate": "2023-05-19 16:28:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4891",
        "InterviewEndDate": "2023-05-19 16:32:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4892",
        "InterviewEndDate": "2023-05-19 19:27:36",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4893",
        "InterviewEndDate": "2023-05-19 19:33:44",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4894",
        "InterviewEndDate": "2023-05-19 19:50:49",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4895",
        "InterviewEndDate": "2023-05-19 20:04:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4896",
        "InterviewEndDate": "2023-05-20 18:58:24",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4897",
        "InterviewEndDate": "2023-05-20 19:02:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4898",
        "InterviewEndDate": "2023-05-20 19:09:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4899",
        "InterviewEndDate": "2023-05-20 19:17:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4900",
        "InterviewEndDate": "2023-05-20 19:27:46",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4901",
        "InterviewEndDate": "2023-05-20 19:32:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4902",
        "InterviewEndDate": "2023-05-21 16:15:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4903",
        "InterviewEndDate": "2023-05-21 16:20:45",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4904",
        "InterviewEndDate": "2023-05-21 16:25:17",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4905",
        "InterviewEndDate": "2023-05-21 16:29:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4906",
        "InterviewEndDate": "2023-05-21 16:57:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4907",
        "InterviewEndDate": "2023-05-21 23:13:02",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4908",
        "InterviewEndDate": "2023-05-22 06:50:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4910",
        "InterviewEndDate": "2023-05-22 15:07:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4911",
        "InterviewEndDate": "2023-05-22 15:14:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4912",
        "InterviewEndDate": "2023-05-22 15:21:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4913",
        "InterviewEndDate": "2023-05-22 15:28:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4914",
        "InterviewEndDate": "2023-05-22 15:33:15",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KRK",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4915",
        "InterviewEndDate": "2023-05-22 15:38:58",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KRK",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4916",
        "InterviewEndDate": "2023-05-22 15:44:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4917",
        "InterviewEndDate": "2023-05-22 15:50:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4918",
        "InterviewEndDate": "2023-05-22 15:56:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4919",
        "InterviewEndDate": "2023-05-24 02:34:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4920",
        "InterviewEndDate": "2023-05-25 02:28:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4921",
        "InterviewEndDate": "2023-05-25 02:34:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4922",
        "InterviewEndDate": "2023-05-25 02:39:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4923",
        "InterviewEndDate": "2023-05-25 02:44:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4924",
        "InterviewEndDate": "2023-05-25 02:56:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4925",
        "InterviewEndDate": "2023-05-25 03:05:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4926",
        "InterviewEndDate": "2023-05-25 03:12:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4927",
        "InterviewEndDate": "2023-05-25 03:23:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4928",
        "InterviewEndDate": "2023-05-25 03:30:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4929",
        "InterviewEndDate": "2023-05-26 02:37:47",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4930",
        "InterviewEndDate": "2023-05-26 02:41:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4931",
        "InterviewEndDate": "2023-05-26 02:45:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4932",
        "InterviewEndDate": "2023-05-26 02:52:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4933",
        "InterviewEndDate": "2023-05-26 03:06:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4934",
        "InterviewEndDate": "2023-05-26 03:18:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4935",
        "InterviewEndDate": "2023-05-26 03:23:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4936",
        "InterviewEndDate": "2023-05-26 03:26:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4937",
        "InterviewEndDate": "2023-05-26 14:45:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4938",
        "InterviewEndDate": "2023-05-26 15:14:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4939",
        "InterviewEndDate": "2023-05-26 15:18:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4940",
        "InterviewEndDate": "2023-05-26 15:24:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4941",
        "InterviewEndDate": "2023-05-26 15:33:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4942",
        "InterviewEndDate": "2023-05-26 15:41:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4943",
        "InterviewEndDate": "2023-05-26 15:47:40",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4944",
        "InterviewEndDate": "2023-05-26 16:06:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4945",
        "InterviewEndDate": "2023-05-26 16:11:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4946",
        "InterviewEndDate": "2023-05-26 16:18:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4947",
        "InterviewEndDate": "2023-05-26 21:25:01",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4948",
        "InterviewEndDate": "2023-05-26 21:29:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CCU",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4949",
        "InterviewEndDate": "2023-05-26 21:34:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4950",
        "InterviewEndDate": "2023-05-26 21:40:55",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "ATH",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4951",
        "InterviewEndDate": "2023-05-26 21:49:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4952",
        "InterviewEndDate": "2023-05-26 21:53:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4953",
        "InterviewEndDate": "2023-05-27 02:43:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4954",
        "InterviewEndDate": "2023-05-27 02:46:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4955",
        "InterviewEndDate": "2023-05-27 02:49:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4956",
        "InterviewEndDate": "2023-05-27 02:55:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4957",
        "InterviewEndDate": "2023-05-27 03:00:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4958",
        "InterviewEndDate": "2023-05-27 03:02:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4959",
        "InterviewEndDate": "2023-05-27 03:13:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4960",
        "InterviewEndDate": "2023-05-27 03:19:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4961",
        "InterviewEndDate": "2023-05-27 09:33:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MUX",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4962",
        "InterviewEndDate": "2023-05-27 09:38:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MUX",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4963",
        "InterviewEndDate": "2023-05-27 09:46:31",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4964",
        "InterviewEndDate": "2023-05-27 09:49:48",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4966",
        "InterviewEndDate": "2023-05-27 18:39:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4967",
        "InterviewEndDate": "2023-05-27 18:50:48",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4968",
        "InterviewEndDate": "2023-05-27 18:56:32",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4969",
        "InterviewEndDate": "2023-05-27 19:05:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4970",
        "InterviewEndDate": "2023-05-27 19:11:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4971",
        "InterviewEndDate": "2023-05-27 19:19:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "NRT",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4972",
        "InterviewEndDate": "2023-05-27 19:26:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "NRT",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4973",
        "InterviewEndDate": "2023-05-27 21:20:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCU",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4974",
        "InterviewEndDate": "2023-05-27 21:29:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4975",
        "InterviewEndDate": "2023-05-28 00:36:25",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "IST",
        "AirlineCode": "PC",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4976",
        "InterviewEndDate": "2023-05-28 00:40:34",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "IST",
        "AirlineCode": "PC",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4977",
        "InterviewEndDate": "2023-05-28 06:41:20",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4978",
        "InterviewEndDate": "2023-05-28 06:50:08",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4979",
        "InterviewEndDate": "2023-05-28 07:38:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4980",
        "InterviewEndDate": "2023-05-28 08:31:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4981",
        "InterviewEndDate": "2023-05-28 08:41:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4982",
        "InterviewEndDate": "2023-05-28 08:50:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4983",
        "InterviewEndDate": "2023-05-28 08:57:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4984",
        "InterviewEndDate": "2023-05-28 09:07:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4985",
        "InterviewEndDate": "2023-05-28 09:18:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4986",
        "InterviewEndDate": "2023-05-28 09:26:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4987",
        "InterviewEndDate": "2023-05-28 09:32:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4988",
        "InterviewEndDate": "2023-05-28 09:44:54",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4989",
        "InterviewEndDate": "2023-05-28 09:55:53",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4990",
        "InterviewEndDate": "2023-05-28 19:24:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4991",
        "InterviewEndDate": "2023-05-28 19:27:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4992",
        "InterviewEndDate": "2023-05-28 19:31:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4993",
        "InterviewEndDate": "2023-05-29 14:59:55",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4994",
        "InterviewEndDate": "2023-05-29 15:04:03",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4995",
        "InterviewEndDate": "2023-05-29 15:11:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4996",
        "InterviewEndDate": "2023-05-29 15:17:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4997",
        "InterviewEndDate": "2023-05-29 15:23:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "4998",
        "InterviewEndDate": "2023-05-29 15:44:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "4999",
        "InterviewEndDate": "2023-05-29 15:48:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5001",
        "InterviewEndDate": "2023-05-29 15:58:17",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5002",
        "InterviewEndDate": "2023-05-29 16:00:39",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5003",
        "InterviewEndDate": "2023-05-29 16:13:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5004",
        "InterviewEndDate": "2023-05-29 16:16:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5005",
        "InterviewEndDate": "2023-05-29 19:06:49",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5006",
        "InterviewEndDate": "2023-05-29 19:11:55",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5007",
        "InterviewEndDate": "2023-05-29 19:15:04",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5008",
        "InterviewEndDate": "2023-05-29 19:22:31",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5009",
        "InterviewEndDate": "2023-05-29 19:27:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5010",
        "InterviewEndDate": "2023-05-29 19:32:10",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5011",
        "InterviewEndDate": "2023-05-29 22:38:30",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5012",
        "InterviewEndDate": "2023-05-31 02:45:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5013",
        "InterviewEndDate": "2023-05-31 03:09:36",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5015",
        "InterviewEndDate": "2023-05-31 03:31:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5016",
        "InterviewEndDate": "2023-05-31 03:25:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5017",
        "InterviewEndDate": "2023-05-31 09:34:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5018",
        "InterviewEndDate": "2023-05-31 09:37:58",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5019",
        "InterviewEndDate": "2023-05-31 09:44:41",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5020",
        "InterviewEndDate": "2023-05-31 09:50:25",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5021",
        "InterviewEndDate": "2023-05-31 17:52:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5022",
        "InterviewEndDate": "2023-05-31 17:57:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5023",
        "InterviewEndDate": "2023-05-31 18:45:58",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5024",
        "InterviewEndDate": "2023-05-31 18:55:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5026",
        "InterviewEndDate": "2023-05-31 19:30:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5027",
        "InterviewEndDate": "2023-06-01 08:24:55",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5028",
        "InterviewEndDate": "2023-06-01 09:00:10",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5029",
        "InterviewEndDate": "2023-06-01 08:35:59",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5030",
        "InterviewEndDate": "2023-06-01 21:54:37",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5031",
        "InterviewEndDate": "2023-06-01 22:02:46",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5032",
        "InterviewEndDate": "2023-06-01 22:11:36",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5033",
        "InterviewEndDate": "2023-06-01 22:21:12",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5034",
        "InterviewEndDate": "2023-06-02 07:05:01",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5035",
        "InterviewEndDate": "2023-06-02 07:31:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5036",
        "InterviewEndDate": "2023-06-02 07:44:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5037",
        "InterviewEndDate": "2023-06-02 07:51:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5038",
        "InterviewEndDate": "2023-06-02 08:07:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5039",
        "InterviewEndDate": "2023-06-02 20:13:56",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5040",
        "InterviewEndDate": "2023-06-02 20:18:13",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5041",
        "InterviewEndDate": "2023-06-02 20:24:27",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5042",
        "InterviewEndDate": "2023-06-02 20:30:36",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "DAC",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5043",
        "InterviewEndDate": "2023-06-02 20:37:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "DAC",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5044",
        "InterviewEndDate": "2023-06-03 15:34:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5045",
        "InterviewEndDate": "2023-06-03 15:39:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5046",
        "InterviewEndDate": "2023-06-03 16:09:59",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SOF",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5047",
        "InterviewEndDate": "2023-06-04 09:23:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5048",
        "InterviewEndDate": "2023-06-04 09:27:37",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5049",
        "InterviewEndDate": "2023-06-04 09:32:20",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5050",
        "InterviewEndDate": "2023-06-04 10:02:51",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5051",
        "InterviewEndDate": "2023-06-04 10:08:39",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5052",
        "InterviewEndDate": "2023-06-04 18:43:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5053",
        "InterviewEndDate": "2023-06-04 18:53:15",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5054",
        "InterviewEndDate": "2023-06-04 18:59:33",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5055",
        "InterviewEndDate": "2023-06-04 19:26:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5056",
        "InterviewEndDate": "2023-06-04 19:33:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5057",
        "InterviewEndDate": "2023-06-04 19:39:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5058",
        "InterviewEndDate": "2023-06-05 02:01:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5059",
        "InterviewEndDate": "2023-06-05 02:17:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5060",
        "InterviewEndDate": "2023-06-05 02:21:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5061",
        "InterviewEndDate": "2023-06-05 02:32:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5062",
        "InterviewEndDate": "2023-06-05 09:59:11",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5063",
        "InterviewEndDate": "2023-06-05 10:03:53",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5064",
        "InterviewEndDate": "2023-06-05 20:18:15",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5065",
        "InterviewEndDate": "2023-06-05 20:24:50",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5066",
        "InterviewEndDate": "2023-06-05 20:36:38",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5067",
        "InterviewEndDate": "2023-06-05 21:59:45",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5068",
        "InterviewEndDate": "2023-06-05 22:12:16",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TIA",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5069",
        "InterviewEndDate": "2023-06-05 22:16:18",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5070",
        "InterviewEndDate": "2023-06-06 15:11:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5071",
        "InterviewEndDate": "2023-06-06 15:18:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5072",
        "InterviewEndDate": "2023-06-06 15:30:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5073",
        "InterviewEndDate": "2023-06-06 19:41:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5074",
        "InterviewEndDate": "2023-06-06 19:46:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5075",
        "InterviewEndDate": "2023-06-07 10:44:37",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5076",
        "InterviewEndDate": "2023-06-07 10:51:20",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KWI",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5077",
        "InterviewEndDate": "2023-06-07 10:56:25",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KWI",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5078",
        "InterviewEndDate": "2023-06-07 17:01:22",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5079",
        "InterviewEndDate": "2023-06-07 17:09:59",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5080",
        "InterviewEndDate": "2023-06-07 21:10:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5082",
        "InterviewEndDate": "2023-06-07 21:13:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5083",
        "InterviewEndDate": "2023-06-07 21:18:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5084",
        "InterviewEndDate": "2023-06-08 00:13:04",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5085",
        "InterviewEndDate": "2023-06-08 00:18:05",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5086",
        "InterviewEndDate": "2023-06-08 14:57:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5087",
        "InterviewEndDate": "2023-06-08 15:04:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5088",
        "InterviewEndDate": "2023-06-08 15:07:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5089",
        "InterviewEndDate": "2023-06-08 15:27:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5090",
        "InterviewEndDate": "2023-06-08 18:00:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5091",
        "InterviewEndDate": "2023-06-09 07:59:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5092",
        "InterviewEndDate": "2023-06-09 09:31:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5093",
        "InterviewEndDate": "2023-06-09 09:39:17",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5094",
        "InterviewEndDate": "2023-06-09 10:04:24",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5095",
        "InterviewEndDate": "2023-06-09 10:13:30",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5096",
        "InterviewEndDate": "2023-06-09 14:13:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5097",
        "InterviewEndDate": "2023-06-09 14:20:59",
        "InterviewState": "Complete",
        "Flight": "RB - Syrian Arab Airlines",
        "Dest": "DAM",
        "AirlineCode": "RB",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5098",
        "InterviewEndDate": "2023-06-09 14:27:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5099",
        "InterviewEndDate": "2023-06-09 21:47:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5100",
        "InterviewEndDate": "2023-06-09 21:51:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5101",
        "InterviewEndDate": "2023-06-10 08:19:23",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MCT",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5102",
        "InterviewEndDate": "2023-06-11 06:45:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5103",
        "InterviewEndDate": "2023-06-11 06:50:33",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5104",
        "InterviewEndDate": "2023-06-12 01:25:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5105",
        "InterviewEndDate": "2023-06-12 01:44:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5106",
        "InterviewEndDate": "2023-06-12 01:49:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5107",
        "InterviewEndDate": "2023-06-12 01:57:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5108",
        "InterviewEndDate": "2023-06-12 02:05:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5109",
        "InterviewEndDate": "2023-06-12 02:12:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5110",
        "InterviewEndDate": "2023-06-12 02:53:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5111",
        "InterviewEndDate": "2023-06-12 03:05:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5112",
        "InterviewEndDate": "2023-06-12 03:13:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5113",
        "InterviewEndDate": "2023-06-12 03:21:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5114",
        "InterviewEndDate": "2023-06-12 15:15:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5115",
        "InterviewEndDate": "2023-06-12 15:25:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5116",
        "InterviewEndDate": "2023-06-12 15:33:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5117",
        "InterviewEndDate": "2023-06-12 15:39:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5118",
        "InterviewEndDate": "2023-06-12 15:52:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5120",
        "InterviewEndDate": "2023-06-12 16:25:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5121",
        "InterviewEndDate": "2023-06-12 16:52:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5122",
        "InterviewEndDate": "2023-06-12 18:09:41",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5123",
        "InterviewEndDate": "2023-06-12 19:30:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5124",
        "InterviewEndDate": "2023-06-12 20:08:19",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5126",
        "InterviewEndDate": "2023-06-12 21:52:05",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MLE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5127",
        "InterviewEndDate": "2023-06-13 02:55:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5128",
        "InterviewEndDate": "2023-06-13 02:58:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5129",
        "InterviewEndDate": "2023-06-13 03:02:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5130",
        "InterviewEndDate": "2023-06-13 03:08:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5131",
        "InterviewEndDate": "2023-06-13 03:16:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5132",
        "InterviewEndDate": "2023-06-13 09:25:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5133",
        "InterviewEndDate": "2023-06-13 09:41:13",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5134",
        "InterviewEndDate": "2023-06-13 09:44:52",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5135",
        "InterviewEndDate": "2023-06-13 15:24:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5136",
        "InterviewEndDate": "2023-06-14 02:01:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5137",
        "InterviewEndDate": "2023-06-14 02:06:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5138",
        "InterviewEndDate": "2023-06-14 02:11:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5139",
        "InterviewEndDate": "2023-06-14 02:32:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5140",
        "InterviewEndDate": "2023-06-14 02:43:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5141",
        "InterviewEndDate": "2023-06-14 02:56:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5142",
        "InterviewEndDate": "2023-06-14 03:15:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5143",
        "InterviewEndDate": "2023-06-14 21:53:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5144",
        "InterviewEndDate": "2023-06-14 22:00:58",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5146",
        "InterviewEndDate": "2023-06-15 12:29:21",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5147",
        "InterviewEndDate": "2023-06-15 12:35:19",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "CAI",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5148",
        "InterviewEndDate": "2023-06-15 14:33:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5149",
        "InterviewEndDate": "2023-06-15 14:41:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5150",
        "InterviewEndDate": "2023-06-15 14:48:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5151",
        "InterviewEndDate": "2023-06-15 14:52:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5152",
        "InterviewEndDate": "2023-06-15 15:07:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5153",
        "InterviewEndDate": "2023-06-15 15:12:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5154",
        "InterviewEndDate": "2023-06-16 15:17:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5155",
        "InterviewEndDate": "2023-06-16 15:28:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5156",
        "InterviewEndDate": "2023-06-16 15:33:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5157",
        "InterviewEndDate": "2023-06-16 16:14:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5158",
        "InterviewEndDate": "2023-06-16 16:15:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5159",
        "InterviewEndDate": "2023-06-16 18:46:56",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5161",
        "InterviewEndDate": "2023-06-16 19:02:26",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5162",
        "InterviewEndDate": "2023-06-16 19:17:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5163",
        "InterviewEndDate": "2023-06-16 19:20:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5164",
        "InterviewEndDate": "2023-06-17 08:39:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5165",
        "InterviewEndDate": "2023-06-17 08:47:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5166",
        "InterviewEndDate": "2023-06-17 08:54:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5167",
        "InterviewEndDate": "2023-06-17 09:00:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5168",
        "InterviewEndDate": "2023-06-17 09:07:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5169",
        "InterviewEndDate": "2023-06-17 15:13:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5170",
        "InterviewEndDate": "2023-06-17 15:21:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5171",
        "InterviewEndDate": "2023-06-17 15:25:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5172",
        "InterviewEndDate": "2023-06-17 15:32:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5173",
        "InterviewEndDate": "2023-06-17 16:00:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5174",
        "InterviewEndDate": "2023-06-17 16:14:38",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5175",
        "InterviewEndDate": "2023-06-17 16:19:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5176",
        "InterviewEndDate": "2023-06-17 19:15:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5177",
        "InterviewEndDate": "2023-06-17 19:24:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5178",
        "InterviewEndDate": "2023-06-18 02:30:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5179",
        "InterviewEndDate": "2023-06-18 09:43:34",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5180",
        "InterviewEndDate": "2023-06-18 09:51:14",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AQJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5181",
        "InterviewEndDate": "2023-06-18 09:54:50",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5182",
        "InterviewEndDate": "2023-06-19 07:51:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5183",
        "InterviewEndDate": "2023-06-19 07:58:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5184",
        "InterviewEndDate": "2023-06-19 08:06:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5185",
        "InterviewEndDate": "2023-06-19 08:30:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SLL",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5186",
        "InterviewEndDate": "2023-06-19 08:41:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5187",
        "InterviewEndDate": "2023-06-19 08:45:31",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5189",
        "InterviewEndDate": "2023-06-19 15:36:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "GVA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5190",
        "InterviewEndDate": "2023-06-19 15:43:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5191",
        "InterviewEndDate": "2023-06-19 15:50:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "GVA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5192",
        "InterviewEndDate": "2023-06-19 15:56:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5193",
        "InterviewEndDate": "2023-06-19 16:02:22",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KRK",
        "AirlineCode": "W6",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5194",
        "InterviewEndDate": "2023-06-19 16:07:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5195",
        "InterviewEndDate": "2023-06-19 16:12:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5196",
        "InterviewEndDate": "2023-06-19 16:16:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5197",
        "InterviewEndDate": "2023-06-19 16:23:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5198",
        "InterviewEndDate": "2023-06-19 16:28:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5199",
        "InterviewEndDate": "2023-06-19 16:33:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5200",
        "InterviewEndDate": "2023-06-19 16:38:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5201",
        "InterviewEndDate": "2023-06-19 16:42:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5202",
        "InterviewEndDate": "2023-06-19 16:48:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5203",
        "InterviewEndDate": "2023-06-19 16:52:41",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5204",
        "InterviewEndDate": "2023-06-19 16:56:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5205",
        "InterviewEndDate": "2023-06-19 17:04:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BRU",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5206",
        "InterviewEndDate": "2023-06-21 18:15:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5207",
        "InterviewEndDate": "2023-06-21 19:05:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5208",
        "InterviewEndDate": "2023-06-21 19:13:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5209",
        "InterviewEndDate": "2023-06-22 02:28:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5210",
        "InterviewEndDate": "2023-06-22 02:32:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5211",
        "InterviewEndDate": "2023-06-22 02:37:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5212",
        "InterviewEndDate": "2023-06-22 02:45:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5213",
        "InterviewEndDate": "2023-06-22 03:06:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5214",
        "InterviewEndDate": "2023-06-22 03:20:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5215",
        "InterviewEndDate": "2023-06-22 09:40:05",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5216",
        "InterviewEndDate": "2023-06-22 09:57:36",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5217",
        "InterviewEndDate": "2023-06-22 19:46:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5218",
        "InterviewEndDate": "2023-06-22 19:51:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5219",
        "InterviewEndDate": "2023-06-22 19:56:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5220",
        "InterviewEndDate": "2023-06-22 20:04:34",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5221",
        "InterviewEndDate": "2023-06-23 02:25:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5222",
        "InterviewEndDate": "2023-06-23 02:53:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5223",
        "InterviewEndDate": "2023-06-23 02:59:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5224",
        "InterviewEndDate": "2023-06-23 03:05:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5225",
        "InterviewEndDate": "2023-06-23 03:14:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5226",
        "InterviewEndDate": "2023-06-23 03:20:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5227",
        "InterviewEndDate": "2023-06-23 16:47:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5228",
        "InterviewEndDate": "2023-06-23 16:53:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5229",
        "InterviewEndDate": "2023-06-24 14:44:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5230",
        "InterviewEndDate": "2023-06-24 14:53:54",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "NAP",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5231",
        "InterviewEndDate": "2023-06-24 15:00:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5232",
        "InterviewEndDate": "2023-06-24 15:10:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5233",
        "InterviewEndDate": "2023-06-24 15:16:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5234",
        "InterviewEndDate": "2023-06-24 15:21:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5237",
        "InterviewEndDate": "2023-06-24 19:18:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5238",
        "InterviewEndDate": "2023-06-24 19:28:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5239",
        "InterviewEndDate": "2023-06-24 19:22:17",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "IXE",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5240",
        "InterviewEndDate": "2023-06-24 19:28:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5241",
        "InterviewEndDate": "2023-06-24 19:33:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5242",
        "InterviewEndDate": "2023-06-24 19:36:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5243",
        "InterviewEndDate": "2023-06-24 19:40:24",
        "InterviewState": "Complete",
        "Flight": "RQ - Kam Air",
        "Dest": "KBL",
        "AirlineCode": "RQ",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5244",
        "InterviewEndDate": "2023-06-24 19:45:29",
        "InterviewState": "Complete",
        "Flight": "RQ - Kam Air",
        "Dest": "KBL",
        "AirlineCode": "RQ",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5245",
        "InterviewEndDate": "2023-06-24 19:59:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5246",
        "InterviewEndDate": "2023-06-24 19:48:36",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5247",
        "InterviewEndDate": "2023-06-24 19:54:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5248",
        "InterviewEndDate": "2023-06-24 19:59:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5249",
        "InterviewEndDate": "2023-06-24 20:07:51",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5250",
        "InterviewEndDate": "2023-06-24 20:12:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5251",
        "InterviewEndDate": "2023-06-25 09:19:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5252",
        "InterviewEndDate": "2023-06-25 09:24:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5253",
        "InterviewEndDate": "2023-06-25 09:29:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5254",
        "InterviewEndDate": "2023-06-25 15:42:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5255",
        "InterviewEndDate": "2023-06-25 15:52:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5256",
        "InterviewEndDate": "2023-06-25 15:56:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5257",
        "InterviewEndDate": "2023-06-25 16:01:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5258",
        "InterviewEndDate": "2023-06-25 19:45:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5259",
        "InterviewEndDate": "2023-06-25 19:46:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5260",
        "InterviewEndDate": "2023-06-26 07:32:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5261",
        "InterviewEndDate": "2023-06-26 07:41:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5262",
        "InterviewEndDate": "2023-06-26 07:51:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5263",
        "InterviewEndDate": "2023-06-26 07:59:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5264",
        "InterviewEndDate": "2023-06-26 08:33:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5265",
        "InterviewEndDate": "2023-06-26 08:38:04",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SLL",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5266",
        "InterviewEndDate": "2023-06-26 08:50:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SLL",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5267",
        "InterviewEndDate": "2023-06-26 08:57:02",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5268",
        "InterviewEndDate": "2023-06-26 09:08:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5269",
        "InterviewEndDate": "2023-06-26 15:28:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5270",
        "InterviewEndDate": "2023-06-26 15:36:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5271",
        "InterviewEndDate": "2023-06-26 15:43:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5272",
        "InterviewEndDate": "2023-06-26 15:57:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5273",
        "InterviewEndDate": "2023-06-26 16:01:28",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5274",
        "InterviewEndDate": "2023-06-26 16:06:15",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5275",
        "InterviewEndDate": "2023-06-27 19:24:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5276",
        "InterviewEndDate": "2023-06-27 19:40:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5277",
        "InterviewEndDate": "2023-06-27 19:48:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5278",
        "InterviewEndDate": "2023-06-27 19:58:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5279",
        "InterviewEndDate": "2023-06-27 20:07:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5280",
        "InterviewEndDate": "2023-06-27 21:03:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5281",
        "InterviewEndDate": "2023-06-27 21:08:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5282",
        "InterviewEndDate": "2023-06-27 21:13:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5283",
        "InterviewEndDate": "2023-06-27 21:17:46",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5284",
        "InterviewEndDate": "2023-06-27 21:23:22",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5285",
        "InterviewEndDate": "2023-07-01 18:32:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5286",
        "InterviewEndDate": "2023-07-01 18:42:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5287",
        "InterviewEndDate": "2023-07-01 18:48:10",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5288",
        "InterviewEndDate": "2023-07-01 19:10:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5289",
        "InterviewEndDate": "2023-07-01 19:23:25",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5290",
        "InterviewEndDate": "2023-07-01 19:43:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5291",
        "InterviewEndDate": "2023-07-02 02:24:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5292",
        "InterviewEndDate": "2023-07-02 09:55:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5293",
        "InterviewEndDate": "2023-07-02 09:58:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5294",
        "InterviewEndDate": "2023-07-03 12:53:00",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5295",
        "InterviewEndDate": "2023-07-03 13:02:01",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5296",
        "InterviewEndDate": "2023-07-03 15:00:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5297",
        "InterviewEndDate": "2023-07-03 15:04:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5298",
        "InterviewEndDate": "2023-07-03 18:54:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5299",
        "InterviewEndDate": "2023-07-03 19:01:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5300",
        "InterviewEndDate": "2023-07-04 01:44:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5301",
        "InterviewEndDate": "2023-07-04 01:48:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5302",
        "InterviewEndDate": "2023-07-04 01:52:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5303",
        "InterviewEndDate": "2023-07-04 19:17:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5304",
        "InterviewEndDate": "2023-07-04 19:20:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5305",
        "InterviewEndDate": "2023-07-04 19:27:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5306",
        "InterviewEndDate": "2023-07-04 19:31:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5307",
        "InterviewEndDate": "2023-07-04 19:30:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5308",
        "InterviewEndDate": "2023-07-05 15:49:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5309",
        "InterviewEndDate": "2023-07-05 15:54:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5310",
        "InterviewEndDate": "2023-07-05 19:24:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5311",
        "InterviewEndDate": "2023-07-05 19:29:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5312",
        "InterviewEndDate": "2023-07-05 19:35:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5313",
        "InterviewEndDate": "2023-07-05 19:43:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5314",
        "InterviewEndDate": "2023-07-05 21:42:18",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCU",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5315",
        "InterviewEndDate": "2023-07-06 10:36:40",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5316",
        "InterviewEndDate": "2023-07-06 15:16:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5317",
        "InterviewEndDate": "2023-07-06 15:22:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5318",
        "InterviewEndDate": "2023-07-06 15:29:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5319",
        "InterviewEndDate": "2023-07-07 09:47:54",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5321",
        "InterviewEndDate": "2023-07-07 15:00:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5322",
        "InterviewEndDate": "2023-07-07 15:06:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5323",
        "InterviewEndDate": "2023-07-07 15:13:40",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5324",
        "InterviewEndDate": "2023-07-07 15:25:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5325",
        "InterviewEndDate": "2023-07-07 15:32:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5326",
        "InterviewEndDate": "2023-07-07 15:36:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5327",
        "InterviewEndDate": "2023-07-08 09:15:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5328",
        "InterviewEndDate": "2023-07-08 09:32:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5330",
        "InterviewEndDate": "2023-07-08 09:46:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5331",
        "InterviewEndDate": "2023-07-08 09:55:12",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5332",
        "InterviewEndDate": "2023-07-08 10:04:32",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BKK",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5333",
        "InterviewEndDate": "2023-07-08 10:10:35",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BKK",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5334",
        "InterviewEndDate": "2023-07-08 10:17:50",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5335",
        "InterviewEndDate": "2023-07-09 03:06:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5336",
        "InterviewEndDate": "2023-07-09 03:14:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5337",
        "InterviewEndDate": "2023-07-09 03:21:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5338",
        "InterviewEndDate": "2023-07-09 03:28:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5339",
        "InterviewEndDate": "2023-07-09 09:50:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5340",
        "InterviewEndDate": "2023-07-09 10:03:45",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5341",
        "InterviewEndDate": "2023-07-09 10:11:29",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5342",
        "InterviewEndDate": "2023-07-10 02:19:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5343",
        "InterviewEndDate": "2023-07-10 02:25:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5344",
        "InterviewEndDate": "2023-07-10 02:30:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5345",
        "InterviewEndDate": "2023-07-10 02:50:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5346",
        "InterviewEndDate": "2023-07-10 02:52:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5347",
        "InterviewEndDate": "2023-07-10 12:49:47",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5348",
        "InterviewEndDate": "2023-07-10 13:01:51",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5349",
        "InterviewEndDate": "2023-07-10 18:05:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5350",
        "InterviewEndDate": "2023-07-11 03:02:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5351",
        "InterviewEndDate": "2023-07-11 03:07:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5352",
        "InterviewEndDate": "2023-07-11 03:13:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5353",
        "InterviewEndDate": "2023-07-11 03:22:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5354",
        "InterviewEndDate": "2023-07-11 03:26:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5355",
        "InterviewEndDate": "2023-07-11 08:05:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5356",
        "InterviewEndDate": "2023-07-12 15:19:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5357",
        "InterviewEndDate": "2023-07-12 15:25:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5358",
        "InterviewEndDate": "2023-07-12 15:35:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5359",
        "InterviewEndDate": "2023-07-12 15:55:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5360",
        "InterviewEndDate": "2023-07-12 16:02:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5361",
        "InterviewEndDate": "2023-07-12 16:10:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5362",
        "InterviewEndDate": "2023-07-12 16:31:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TRV",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5363",
        "InterviewEndDate": "2023-07-13 01:45:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5364",
        "InterviewEndDate": "2023-07-13 01:51:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5365",
        "InterviewEndDate": "2023-07-13 01:58:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5366",
        "InterviewEndDate": "2023-07-13 02:06:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5367",
        "InterviewEndDate": "2023-07-13 15:25:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5368",
        "InterviewEndDate": "2023-07-13 15:53:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5369",
        "InterviewEndDate": "2023-07-13 15:57:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5370",
        "InterviewEndDate": "2023-07-14 19:10:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5371",
        "InterviewEndDate": "2023-07-14 19:20:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5372",
        "InterviewEndDate": "2023-07-14 19:22:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5373",
        "InterviewEndDate": "2023-07-14 19:28:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5374",
        "InterviewEndDate": "2023-07-18 03:57:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5375",
        "InterviewEndDate": "2023-07-14 22:14:48",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5376",
        "InterviewEndDate": "2023-07-15 09:39:38",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5377",
        "InterviewEndDate": "2023-07-15 09:50:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5378",
        "InterviewEndDate": "2023-07-15 09:57:21",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5379",
        "InterviewEndDate": "2023-07-16 01:37:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5380",
        "InterviewEndDate": "2023-07-16 02:06:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5381",
        "InterviewEndDate": "2023-07-16 02:12:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5382",
        "InterviewEndDate": "2023-07-16 02:28:16",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5383",
        "InterviewEndDate": "2023-07-18 02:31:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5386",
        "InterviewEndDate": "2023-07-16 15:22:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5387",
        "InterviewEndDate": "2023-07-16 15:53:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5388",
        "InterviewEndDate": "2023-07-16 16:02:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5389",
        "InterviewEndDate": "2023-07-16 16:21:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5390",
        "InterviewEndDate": "2023-07-16 16:25:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5391",
        "InterviewEndDate": "2023-07-16 16:34:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5392",
        "InterviewEndDate": "2023-07-16 16:40:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5393",
        "InterviewEndDate": "2023-07-16 16:49:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5394",
        "InterviewEndDate": "2023-07-16 16:57:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5395",
        "InterviewEndDate": "2023-07-16 17:06:50",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5396",
        "InterviewEndDate": "2023-07-18 02:38:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5397",
        "InterviewEndDate": "2023-07-18 02:47:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5398",
        "InterviewEndDate": "2023-07-18 03:00:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5399",
        "InterviewEndDate": "2023-07-18 03:06:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5400",
        "InterviewEndDate": "2023-07-18 10:08:00",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "KUT",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5401",
        "InterviewEndDate": "2023-07-19 02:25:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5402",
        "InterviewEndDate": "2023-07-19 02:42:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5403",
        "InterviewEndDate": "2023-07-19 02:47:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5404",
        "InterviewEndDate": "2023-07-19 02:54:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5405",
        "InterviewEndDate": "2023-07-19 03:06:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5406",
        "InterviewEndDate": "2023-07-19 03:11:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5407",
        "InterviewEndDate": "2023-07-19 10:09:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5412",
        "InterviewEndDate": "2023-07-21 03:21:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5413",
        "InterviewEndDate": "2023-07-21 03:28:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5414",
        "InterviewEndDate": "2023-07-21 03:37:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5415",
        "InterviewEndDate": "2023-07-21 10:35:45",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5416",
        "InterviewEndDate": "2023-07-21 10:40:27",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5417",
        "InterviewEndDate": "2023-07-21 15:42:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5418",
        "InterviewEndDate": "2023-07-21 15:49:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5419",
        "InterviewEndDate": "2023-07-21 15:52:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5420",
        "InterviewEndDate": "2023-07-21 19:18:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5421",
        "InterviewEndDate": "2023-07-21 19:50:40",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5422",
        "InterviewEndDate": "2023-07-22 16:11:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5423",
        "InterviewEndDate": "2023-07-22 16:15:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5424",
        "InterviewEndDate": "2023-07-22 16:17:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5425",
        "InterviewEndDate": "2023-07-22 16:28:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5426",
        "InterviewEndDate": "2023-07-22 18:05:09",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5427",
        "InterviewEndDate": "2023-07-22 18:07:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5428",
        "InterviewEndDate": "2023-07-22 19:37:58",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5429",
        "InterviewEndDate": "2023-07-22 19:43:12",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5430",
        "InterviewEndDate": "2023-07-22 19:44:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5431",
        "InterviewEndDate": "2023-07-23 01:36:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5432",
        "InterviewEndDate": "2023-07-23 01:40:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5433",
        "InterviewEndDate": "2023-07-23 01:45:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5434",
        "InterviewEndDate": "2023-07-23 01:51:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5435",
        "InterviewEndDate": "2023-07-23 01:55:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5436",
        "InterviewEndDate": "2023-07-23 02:02:04",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5437",
        "InterviewEndDate": "2023-07-23 02:06:40",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5438",
        "InterviewEndDate": "2023-07-23 16:11:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5439",
        "InterviewEndDate": "2023-07-23 16:18:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5440",
        "InterviewEndDate": "2023-07-23 16:26:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5441",
        "InterviewEndDate": "2023-07-23 19:06:40",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5442",
        "InterviewEndDate": "2023-07-23 19:13:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5443",
        "InterviewEndDate": "2023-07-23 19:21:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5444",
        "InterviewEndDate": "2023-07-23 19:31:34",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5445",
        "InterviewEndDate": "2023-07-23 19:36:35",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5446",
        "InterviewEndDate": "2023-07-24 03:08:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5447",
        "InterviewEndDate": "2023-07-24 03:13:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5448",
        "InterviewEndDate": "2023-07-24 03:24:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5449",
        "InterviewEndDate": "2023-07-24 03:30:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5450",
        "InterviewEndDate": "2023-07-24 03:34:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5451",
        "InterviewEndDate": "2023-07-24 07:51:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5452",
        "InterviewEndDate": "2023-07-24 09:32:42",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5453",
        "InterviewEndDate": "2023-07-24 09:48:47",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5454",
        "InterviewEndDate": "2023-07-24 09:58:31",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5455",
        "InterviewEndDate": "2023-07-24 10:09:22",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5456",
        "InterviewEndDate": "2023-07-24 10:18:35",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5457",
        "InterviewEndDate": "2023-07-24 10:30:30",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BKK",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5458",
        "InterviewEndDate": "2023-07-25 04:27:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5459",
        "InterviewEndDate": "2023-07-25 04:35:14",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BOM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5460",
        "InterviewEndDate": "2023-07-25 04:41:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5461",
        "InterviewEndDate": "2023-07-25 04:53:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5462",
        "InterviewEndDate": "2023-07-25 06:30:37",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5463",
        "InterviewEndDate": "2023-07-25 06:40:01",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5464",
        "InterviewEndDate": "2023-07-25 06:47:55",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5465",
        "InterviewEndDate": "2023-07-25 06:56:38",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5466",
        "InterviewEndDate": "2023-07-25 07:09:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5467",
        "InterviewEndDate": "2023-07-26 02:35:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5468",
        "InterviewEndDate": "2023-07-26 02:49:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5469",
        "InterviewEndDate": "2023-07-26 15:00:40",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5470",
        "InterviewEndDate": "2023-07-26 15:11:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5471",
        "InterviewEndDate": "2023-07-26 15:18:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5472",
        "InterviewEndDate": "2023-07-26 15:26:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5474",
        "InterviewEndDate": "2023-07-26 15:26:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5477",
        "InterviewEndDate": "2023-07-26 15:33:23",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TBS",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5478",
        "InterviewEndDate": "2023-07-26 15:47:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5479",
        "InterviewEndDate": "2023-07-26 15:57:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5481",
        "InterviewEndDate": "2023-07-27 02:09:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5482",
        "InterviewEndDate": "2023-07-27 02:16:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5483",
        "InterviewEndDate": "2023-07-27 02:20:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5484",
        "InterviewEndDate": "2023-07-27 03:14:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5485",
        "InterviewEndDate": "2023-07-27 03:19:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5486",
        "InterviewEndDate": "2023-07-27 03:24:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5487",
        "InterviewEndDate": "2023-07-27 09:56:05",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5488",
        "InterviewEndDate": "2023-07-27 19:45:27",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5490",
        "InterviewEndDate": "2023-07-27 21:54:37",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5491",
        "InterviewEndDate": "2023-07-27 21:58:22",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5492",
        "InterviewEndDate": "2023-07-27 22:02:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5493",
        "InterviewEndDate": "2023-07-27 22:08:00",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5494",
        "InterviewEndDate": "2023-07-27 22:33:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CGP",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5495",
        "InterviewEndDate": "2023-07-27 22:39:28",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5496",
        "InterviewEndDate": "2023-07-27 22:42:44",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SLL",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5497",
        "InterviewEndDate": "2023-07-27 22:47:46",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5498",
        "InterviewEndDate": "2023-08-01 15:29:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5499",
        "InterviewEndDate": "2023-08-01 15:42:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5500",
        "InterviewEndDate": "2023-08-01 15:49:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5501",
        "InterviewEndDate": "2023-08-01 16:18:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5502",
        "InterviewEndDate": "2023-08-01 19:13:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5503",
        "InterviewEndDate": "2023-08-01 19:25:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5504",
        "InterviewEndDate": "2023-08-02 04:42:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5505",
        "InterviewEndDate": "2023-08-02 04:53:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5506",
        "InterviewEndDate": "2023-08-02 05:02:28",
        "InterviewState": "Complete",
        "Flight": "RB - Syrian Arab Airlines",
        "Dest": "DAM",
        "AirlineCode": "RB",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5507",
        "InterviewEndDate": "2023-08-02 09:01:08",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5508",
        "InterviewEndDate": "2023-08-02 09:17:12",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5509",
        "InterviewEndDate": "2023-08-02 09:24:41",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AQJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5510",
        "InterviewEndDate": "2023-08-03 02:56:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5511",
        "InterviewEndDate": "2023-08-03 03:04:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5512",
        "InterviewEndDate": "2023-08-03 07:51:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5513",
        "InterviewEndDate": "2023-08-03 08:00:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5514",
        "InterviewEndDate": "2023-08-04 07:28:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5515",
        "InterviewEndDate": "2023-08-06 02:23:00",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5516",
        "InterviewEndDate": "2023-08-06 02:26:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HMB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5517",
        "InterviewEndDate": "2023-08-06 02:53:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5518",
        "InterviewEndDate": "2023-08-06 03:01:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5519",
        "InterviewEndDate": "2023-08-06 03:06:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5520",
        "InterviewEndDate": "2023-08-07 02:30:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5521",
        "InterviewEndDate": "2023-08-07 02:00:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5522",
        "InterviewEndDate": "2023-08-07 02:05:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5523",
        "InterviewEndDate": "2023-08-07 02:37:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5524",
        "InterviewEndDate": "2023-08-07 02:44:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5526",
        "InterviewEndDate": "2023-08-07 02:55:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5527",
        "InterviewEndDate": "2023-08-07 03:01:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5528",
        "InterviewEndDate": "2023-08-08 15:25:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5529",
        "InterviewEndDate": "2023-08-08 15:31:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5530",
        "InterviewEndDate": "2023-08-08 16:08:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5531",
        "InterviewEndDate": "2023-08-08 17:06:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5532",
        "InterviewEndDate": "2023-08-08 17:11:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5533",
        "InterviewEndDate": "2023-08-08 17:16:54",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "DME",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5534",
        "InterviewEndDate": "2023-08-09 14:43:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5535",
        "InterviewEndDate": "2023-08-09 19:01:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5536",
        "InterviewEndDate": "2023-08-09 19:04:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5537",
        "InterviewEndDate": "2023-08-09 19:08:11",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5538",
        "InterviewEndDate": "2023-08-09 19:13:25",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5539",
        "InterviewEndDate": "2023-08-10 15:04:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5540",
        "InterviewEndDate": "2023-08-10 15:08:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5541",
        "InterviewEndDate": "2023-08-10 15:09:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5542",
        "InterviewEndDate": "2023-08-10 15:59:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5543",
        "InterviewEndDate": "2023-08-10 16:13:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5544",
        "InterviewEndDate": "2023-08-10 18:09:45",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5545",
        "InterviewEndDate": "2023-08-10 18:12:00",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5546",
        "InterviewEndDate": "2023-08-11 04:35:05",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5547",
        "InterviewEndDate": "2023-08-11 04:40:37",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5548",
        "InterviewEndDate": "2023-08-11 15:23:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5549",
        "InterviewEndDate": "2023-08-11 15:27:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5550",
        "InterviewEndDate": "2023-08-11 15:35:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5551",
        "InterviewEndDate": "2023-08-11 15:45:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5552",
        "InterviewEndDate": "2023-08-11 15:58:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5553",
        "InterviewEndDate": "2023-08-13 02:45:09",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5554",
        "InterviewEndDate": "2023-08-13 02:50:05",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5555",
        "InterviewEndDate": "2023-08-13 02:56:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5556",
        "InterviewEndDate": "2023-08-13 03:01:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5557",
        "InterviewEndDate": "2023-08-13 03:15:03",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5558",
        "InterviewEndDate": "2023-08-14 17:06:29",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "FCO",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5559",
        "InterviewEndDate": "2023-08-14 17:13:36",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "FCO",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5560",
        "InterviewEndDate": "2023-08-14 17:31:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5561",
        "InterviewEndDate": "2023-08-14 17:41:04",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5562",
        "InterviewEndDate": "2023-08-14 18:19:31",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5563",
        "InterviewEndDate": "2023-08-14 18:30:00",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5564",
        "InterviewEndDate": "2023-08-14 18:36:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5565",
        "InterviewEndDate": "2023-08-14 18:43:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5566",
        "InterviewEndDate": "2023-08-14 18:51:31",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5567",
        "InterviewEndDate": "2023-08-14 18:58:58",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5568",
        "InterviewEndDate": "2023-08-14 19:18:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5569",
        "InterviewEndDate": "2023-08-15 02:31:31",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TAS",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5570",
        "InterviewEndDate": "2023-08-15 02:35:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5571",
        "InterviewEndDate": "2023-08-15 02:40:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5572",
        "InterviewEndDate": "2023-08-15 02:54:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5573",
        "InterviewEndDate": "2023-08-15 03:03:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5574",
        "InterviewEndDate": "2023-08-15 03:11:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5575",
        "InterviewEndDate": "2023-08-15 10:00:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5576",
        "InterviewEndDate": "2023-08-15 15:49:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5578",
        "InterviewEndDate": "2023-08-16 02:12:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5579",
        "InterviewEndDate": "2023-08-16 02:16:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5580",
        "InterviewEndDate": "2023-08-16 02:38:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5581",
        "InterviewEndDate": "2023-08-16 02:50:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5582",
        "InterviewEndDate": "2023-08-16 02:58:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5583",
        "InterviewEndDate": "2023-08-16 03:04:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5584",
        "InterviewEndDate": "2023-08-17 16:02:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5585",
        "InterviewEndDate": "2023-08-17 16:08:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5586",
        "InterviewEndDate": "2023-08-17 16:11:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5587",
        "InterviewEndDate": "2023-08-17 16:14:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5588",
        "InterviewEndDate": "2023-08-17 16:17:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5589",
        "InterviewEndDate": "2023-08-17 18:42:21",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5590",
        "InterviewEndDate": "2023-08-17 18:48:37",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5591",
        "InterviewEndDate": "2023-08-17 18:52:19",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5592",
        "InterviewEndDate": "2023-08-18 18:45:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5593",
        "InterviewEndDate": "2023-08-18 18:53:58",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5594",
        "InterviewEndDate": "2023-08-18 18:59:00",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5596",
        "InterviewEndDate": "2023-08-18 19:14:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5597",
        "InterviewEndDate": "2023-08-18 19:27:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HKT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5598",
        "InterviewEndDate": "2023-08-19 15:37:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5599",
        "InterviewEndDate": "2023-08-19 15:48:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5600",
        "InterviewEndDate": "2023-08-19 15:55:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5601",
        "InterviewEndDate": "2023-08-19 16:02:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5602",
        "InterviewEndDate": "2023-08-19 16:07:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5603",
        "InterviewEndDate": "2023-08-19 22:28:24",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5604",
        "InterviewEndDate": "2023-08-19 22:33:40",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5605",
        "InterviewEndDate": "2023-08-21 03:29:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5606",
        "InterviewEndDate": "2023-08-21 03:40:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5607",
        "InterviewEndDate": "2023-08-23 02:43:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5608",
        "InterviewEndDate": "2023-08-22 14:23:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5609",
        "InterviewEndDate": "2023-08-22 14:29:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5610",
        "InterviewEndDate": "2023-08-22 14:40:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5611",
        "InterviewEndDate": "2023-08-22 14:44:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5612",
        "InterviewEndDate": "2023-08-22 14:51:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5613",
        "InterviewEndDate": "2023-08-22 15:07:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5614",
        "InterviewEndDate": "2023-08-23 02:50:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5615",
        "InterviewEndDate": "2023-08-23 02:54:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5616",
        "InterviewEndDate": "2023-08-23 02:58:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5617",
        "InterviewEndDate": "2023-08-23 03:00:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5618",
        "InterviewEndDate": "2023-08-23 03:10:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5619",
        "InterviewEndDate": "2023-08-23 03:17:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5620",
        "InterviewEndDate": "2023-08-23 03:27:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5621",
        "InterviewEndDate": "2023-08-23 09:46:25",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MUX",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5622",
        "InterviewEndDate": "2023-08-23 10:00:42",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5624",
        "InterviewEndDate": "2023-08-23 17:14:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5625",
        "InterviewEndDate": "2023-08-23 17:21:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5626",
        "InterviewEndDate": "2023-08-23 18:06:32",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "AMD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5627",
        "InterviewEndDate": "2023-08-23 18:18:39",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5628",
        "InterviewEndDate": "2023-08-23 18:29:29",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5629",
        "InterviewEndDate": "2023-08-23 18:33:30",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5630",
        "InterviewEndDate": "2023-08-23 18:40:41",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5632",
        "InterviewEndDate": "2023-08-23 18:46:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5633",
        "InterviewEndDate": "2023-08-24 02:26:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5634",
        "InterviewEndDate": "2023-08-24 02:29:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5635",
        "InterviewEndDate": "2023-08-24 02:40:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5636",
        "InterviewEndDate": "2023-08-24 02:46:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5637",
        "InterviewEndDate": "2023-08-24 03:07:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5638",
        "InterviewEndDate": "2023-08-24 03:10:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5639",
        "InterviewEndDate": "2023-08-24 03:17:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5640",
        "InterviewEndDate": "2023-08-24 03:24:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5641",
        "InterviewEndDate": "2023-08-24 10:00:52",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HMB",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5642",
        "InterviewEndDate": "2023-08-25 02:13:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5643",
        "InterviewEndDate": "2023-08-25 02:17:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5644",
        "InterviewEndDate": "2023-08-25 02:32:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5645",
        "InterviewEndDate": "2023-08-25 02:35:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5646",
        "InterviewEndDate": "2023-08-25 02:48:21",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5647",
        "InterviewEndDate": "2023-08-25 02:55:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5648",
        "InterviewEndDate": "2023-08-25 03:06:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5649",
        "InterviewEndDate": "2023-08-25 03:16:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5650",
        "InterviewEndDate": "2023-08-25 03:24:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5651",
        "InterviewEndDate": "2023-08-25 09:34:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5652",
        "InterviewEndDate": "2023-08-25 09:42:40",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5653",
        "InterviewEndDate": "2023-08-25 17:50:47",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5654",
        "InterviewEndDate": "2023-08-25 17:54:54",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MCT",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5655",
        "InterviewEndDate": "2023-08-25 17:59:27",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "CMB",
        "AirlineCode": "UK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5656",
        "InterviewEndDate": "2023-08-25 18:10:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5657",
        "InterviewEndDate": "2023-08-25 18:16:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5658",
        "InterviewEndDate": "2023-08-25 18:21:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5659",
        "InterviewEndDate": "2023-08-26 03:04:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5660",
        "InterviewEndDate": "2023-08-26 03:10:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5661",
        "InterviewEndDate": "2023-08-26 03:16:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5662",
        "InterviewEndDate": "2023-08-26 03:23:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5663",
        "InterviewEndDate": "2023-08-26 03:28:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5664",
        "InterviewEndDate": "2023-08-26 15:57:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5665",
        "InterviewEndDate": "2023-08-26 16:06:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5666",
        "InterviewEndDate": "2023-08-26 16:11:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5667",
        "InterviewEndDate": "2023-08-26 16:13:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5668",
        "InterviewEndDate": "2023-08-26 16:18:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5669",
        "InterviewEndDate": "2023-08-26 16:20:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5670",
        "InterviewEndDate": "2023-08-26 16:26:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5671",
        "InterviewEndDate": "2023-08-26 16:26:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5672",
        "InterviewEndDate": "2023-08-26 19:02:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5673",
        "InterviewEndDate": "2023-08-26 19:08:14",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5674",
        "InterviewEndDate": "2023-08-26 19:17:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5675",
        "InterviewEndDate": "2023-08-26 19:23:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5676",
        "InterviewEndDate": "2023-08-26 19:32:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CCJ",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5677",
        "InterviewEndDate": "2023-08-26 19:30:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5678",
        "InterviewEndDate": "2023-08-26 22:52:05",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5679",
        "InterviewEndDate": "2023-08-27 01:54:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5680",
        "InterviewEndDate": "2023-08-27 02:05:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5681",
        "InterviewEndDate": "2023-08-27 02:11:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5682",
        "InterviewEndDate": "2023-08-27 02:20:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5683",
        "InterviewEndDate": "2023-08-27 02:30:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5684",
        "InterviewEndDate": "2023-08-27 02:37:40",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5685",
        "InterviewEndDate": "2023-08-27 02:42:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5686",
        "InterviewEndDate": "2023-08-27 02:49:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5687",
        "InterviewEndDate": "2023-08-27 02:56:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5688",
        "InterviewEndDate": "2023-08-27 03:03:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5689",
        "InterviewEndDate": "2023-08-27 03:09:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5690",
        "InterviewEndDate": "2023-08-27 03:14:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5691",
        "InterviewEndDate": "2023-08-27 03:20:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5692",
        "InterviewEndDate": "2023-08-27 03:26:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5693",
        "InterviewEndDate": "2023-08-27 14:39:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5694",
        "InterviewEndDate": "2023-08-27 14:42:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5695",
        "InterviewEndDate": "2023-08-27 14:48:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5696",
        "InterviewEndDate": "2023-08-27 15:02:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5697",
        "InterviewEndDate": "2023-08-27 15:06:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5698",
        "InterviewEndDate": "2023-08-27 15:11:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5699",
        "InterviewEndDate": "2023-08-27 15:56:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5700",
        "InterviewEndDate": "2023-08-27 16:04:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5701",
        "InterviewEndDate": "2023-08-27 16:08:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JNB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5702",
        "InterviewEndDate": "2023-08-27 16:13:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5703",
        "InterviewEndDate": "2023-08-27 19:06:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5704",
        "InterviewEndDate": "2023-08-27 19:13:52",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5705",
        "InterviewEndDate": "2023-08-27 19:24:22",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "IXE",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5706",
        "InterviewEndDate": "2023-08-27 19:35:41",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "IXE",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5707",
        "InterviewEndDate": "2023-08-28 02:38:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5708",
        "InterviewEndDate": "2023-08-28 02:43:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5709",
        "InterviewEndDate": "2023-08-28 02:48:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5710",
        "InterviewEndDate": "2023-08-28 02:54:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5711",
        "InterviewEndDate": "2023-08-28 03:00:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5712",
        "InterviewEndDate": "2023-08-28 15:28:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5713",
        "InterviewEndDate": "2023-08-28 15:33:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5714",
        "InterviewEndDate": "2023-08-28 15:35:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5715",
        "InterviewEndDate": "2023-08-28 15:40:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5716",
        "InterviewEndDate": "2023-08-28 15:44:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5717",
        "InterviewEndDate": "2023-08-28 15:56:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5718",
        "InterviewEndDate": "2023-08-28 16:03:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5719",
        "InterviewEndDate": "2023-08-28 16:09:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5720",
        "InterviewEndDate": "2023-08-28 16:15:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5721",
        "InterviewEndDate": "2023-08-28 16:23:49",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5722",
        "InterviewEndDate": "2023-08-28 16:32:58",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5723",
        "InterviewEndDate": "2023-08-28 16:45:11",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5724",
        "InterviewEndDate": "2023-08-28 19:10:44",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5725",
        "InterviewEndDate": "2023-08-28 19:19:44",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5726",
        "InterviewEndDate": "2023-08-28 19:26:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5727",
        "InterviewEndDate": "2023-08-29 02:48:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5728",
        "InterviewEndDate": "2023-08-29 02:54:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5729",
        "InterviewEndDate": "2023-08-29 02:59:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5730",
        "InterviewEndDate": "2023-08-29 03:06:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5731",
        "InterviewEndDate": "2023-08-29 03:12:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5732",
        "InterviewEndDate": "2023-08-29 05:40:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BAH",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5733",
        "InterviewEndDate": "2023-08-29 09:24:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5734",
        "InterviewEndDate": "2023-08-29 09:31:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5735",
        "InterviewEndDate": "2023-08-29 09:36:53",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5736",
        "InterviewEndDate": "2023-08-29 09:42:25",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5737",
        "InterviewEndDate": "2023-08-29 09:48:21",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5738",
        "InterviewEndDate": "2023-08-29 10:11:03",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5739",
        "InterviewEndDate": "2023-08-29 10:15:38",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5740",
        "InterviewEndDate": "2023-08-29 10:22:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5741",
        "InterviewEndDate": "2023-08-29 14:50:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5742",
        "InterviewEndDate": "2023-08-29 15:01:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5743",
        "InterviewEndDate": "2023-08-29 15:05:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5744",
        "InterviewEndDate": "2023-08-29 15:09:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5745",
        "InterviewEndDate": "2023-08-29 15:16:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5746",
        "InterviewEndDate": "2023-08-29 15:24:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5747",
        "InterviewEndDate": "2023-08-29 15:40:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5748",
        "InterviewEndDate": "2023-08-29 15:50:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5749",
        "InterviewEndDate": "2023-08-29 16:00:13",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5750",
        "InterviewEndDate": "2023-08-29 16:30:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5751",
        "InterviewEndDate": "2023-08-29 16:44:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5753",
        "InterviewEndDate": "2023-08-29 17:04:21",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5754",
        "InterviewEndDate": "2023-08-29 19:05:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5755",
        "InterviewEndDate": "2023-08-29 19:23:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5756",
        "InterviewEndDate": "2023-08-29 19:31:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5757",
        "InterviewEndDate": "2023-08-29 19:46:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5758",
        "InterviewEndDate": "2023-08-29 20:09:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5759",
        "InterviewEndDate": "2023-08-30 03:26:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5760",
        "InterviewEndDate": "2023-08-30 03:31:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5761",
        "InterviewEndDate": "2023-08-30 03:38:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5762",
        "InterviewEndDate": "2023-08-30 04:21:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5763",
        "InterviewEndDate": "2023-08-30 04:26:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5764",
        "InterviewEndDate": "2023-08-30 04:33:38",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5765",
        "InterviewEndDate": "2023-08-30 05:29:42",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BAH",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5766",
        "InterviewEndDate": "2023-08-30 05:34:26",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BAH",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5767",
        "InterviewEndDate": "2023-08-30 05:46:00",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BAH",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5768",
        "InterviewEndDate": "2023-08-30 05:54:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5769",
        "InterviewEndDate": "2023-08-30 06:24:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5770",
        "InterviewEndDate": "2023-08-30 07:06:07",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5771",
        "InterviewEndDate": "2023-08-30 07:10:38",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5772",
        "InterviewEndDate": "2023-08-30 07:15:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5773",
        "InterviewEndDate": "2023-08-30 07:19:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5774",
        "InterviewEndDate": "2023-08-30 07:22:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5775",
        "InterviewEndDate": "2023-08-30 07:28:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5776",
        "InterviewEndDate": "2023-08-30 08:34:22",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5777",
        "InterviewEndDate": "2023-08-30 09:54:18",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5778",
        "InterviewEndDate": "2023-08-30 09:58:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5779",
        "InterviewEndDate": "2023-08-30 10:03:52",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5780",
        "InterviewEndDate": "2023-08-30 10:19:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5781",
        "InterviewEndDate": "2023-08-30 10:29:24",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5782",
        "InterviewEndDate": "2023-08-30 10:33:18",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5783",
        "InterviewEndDate": "2023-08-30 10:45:05",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5784",
        "InterviewEndDate": "2023-08-30 11:03:55",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5785",
        "InterviewEndDate": "2023-08-30 11:14:28",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TLV",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5786",
        "InterviewEndDate": "2023-08-30 11:53:43",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5787",
        "InterviewEndDate": "2023-08-30 11:57:52",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5788",
        "InterviewEndDate": "2023-08-30 12:02:45",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5789",
        "InterviewEndDate": "2023-08-30 12:14:48",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5790",
        "InterviewEndDate": "2023-08-30 21:57:37",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5792",
        "InterviewEndDate": "2023-08-31 02:38:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5793",
        "InterviewEndDate": "2023-08-31 02:45:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5794",
        "InterviewEndDate": "2023-08-31 02:55:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5795",
        "InterviewEndDate": "2023-08-31 03:13:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5796",
        "InterviewEndDate": "2023-08-31 03:21:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5797",
        "InterviewEndDate": "2023-08-31 06:13:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5798",
        "InterviewEndDate": "2023-08-31 06:23:06",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5799",
        "InterviewEndDate": "2023-08-31 06:52:48",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5800",
        "InterviewEndDate": "2023-08-31 07:08:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5801",
        "InterviewEndDate": "2023-08-31 07:38:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5802",
        "InterviewEndDate": "2023-08-31 07:41:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5803",
        "InterviewEndDate": "2023-08-31 07:46:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5804",
        "InterviewEndDate": "2023-08-31 07:53:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5805",
        "InterviewEndDate": "2023-08-31 08:01:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5806",
        "InterviewEndDate": "2023-08-31 08:16:06",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BAH",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5807",
        "InterviewEndDate": "2023-08-31 08:23:56",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5808",
        "InterviewEndDate": "2023-08-31 08:31:38",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5809",
        "InterviewEndDate": "2023-08-31 09:10:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5810",
        "InterviewEndDate": "2023-08-31 09:17:07",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5811",
        "InterviewEndDate": "2023-08-31 09:24:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5813",
        "InterviewEndDate": "2023-08-31 16:53:58",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5814",
        "InterviewEndDate": "2023-08-31 17:03:55",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5815",
        "InterviewEndDate": "2023-08-31 17:11:07",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5816",
        "InterviewEndDate": "2023-08-31 18:35:42",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5817",
        "InterviewEndDate": "2023-08-31 18:47:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5818",
        "InterviewEndDate": "2023-09-01 03:08:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5819",
        "InterviewEndDate": "2023-09-01 03:24:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5820",
        "InterviewEndDate": "2023-09-01 08:11:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5821",
        "InterviewEndDate": "2023-09-01 08:16:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5822",
        "InterviewEndDate": "2023-09-01 08:19:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5823",
        "InterviewEndDate": "2023-09-01 14:03:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5824",
        "InterviewEndDate": "2023-09-01 19:03:12",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "AMD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5825",
        "InterviewEndDate": "2023-09-01 19:18:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5826",
        "InterviewEndDate": "2023-09-01 19:25:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5827",
        "InterviewEndDate": "2023-09-02 02:40:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5828",
        "InterviewEndDate": "2023-09-02 02:44:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5829",
        "InterviewEndDate": "2023-09-02 02:58:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5830",
        "InterviewEndDate": "2023-09-02 03:04:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5831",
        "InterviewEndDate": "2023-09-02 03:12:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5832",
        "InterviewEndDate": "2023-09-02 09:07:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5833",
        "InterviewEndDate": "2023-09-02 14:46:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5834",
        "InterviewEndDate": "2023-09-02 14:53:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5837",
        "InterviewEndDate": "2023-09-02 18:18:23",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5838",
        "InterviewEndDate": "2023-09-02 18:43:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5839",
        "InterviewEndDate": "2023-09-03 02:40:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5840",
        "InterviewEndDate": "2023-09-03 02:44:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5841",
        "InterviewEndDate": "2023-09-03 08:44:34",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SLL",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5842",
        "InterviewEndDate": "2023-09-03 07:50:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5843",
        "InterviewEndDate": "2023-09-03 07:57:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5844",
        "InterviewEndDate": "2023-09-03 09:28:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5845",
        "InterviewEndDate": "2023-09-03 09:36:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5846",
        "InterviewEndDate": "2023-09-03 17:15:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5847",
        "InterviewEndDate": "2023-09-03 17:22:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5848",
        "InterviewEndDate": "2023-09-03 17:30:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5849",
        "InterviewEndDate": "2023-09-03 19:19:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5851",
        "InterviewEndDate": "2023-09-04 16:30:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5852",
        "InterviewEndDate": "2023-09-04 16:32:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5853",
        "InterviewEndDate": "2023-09-04 16:40:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5854",
        "InterviewEndDate": "2023-09-04 16:45:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5855",
        "InterviewEndDate": "2023-09-04 16:56:13",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5856",
        "InterviewEndDate": "2023-09-04 17:01:30",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5857",
        "InterviewEndDate": "2023-09-04 17:35:40",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5858",
        "InterviewEndDate": "2023-09-04 18:37:10",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5859",
        "InterviewEndDate": "2023-09-04 18:48:48",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5860",
        "InterviewEndDate": "2023-09-05 15:34:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5861",
        "InterviewEndDate": "2023-09-05 15:39:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5862",
        "InterviewEndDate": "2023-09-05 15:42:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5863",
        "InterviewEndDate": "2023-09-05 15:49:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5864",
        "InterviewEndDate": "2023-09-05 16:14:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5865",
        "InterviewEndDate": "2023-09-05 16:25:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5866",
        "InterviewEndDate": "2023-09-07 02:33:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5867",
        "InterviewEndDate": "2023-09-07 02:45:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "PEK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5868",
        "InterviewEndDate": "2023-09-07 02:51:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5869",
        "InterviewEndDate": "2023-09-07 02:58:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5870",
        "InterviewEndDate": "2023-09-07 03:04:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5873",
        "InterviewEndDate": "2023-09-08 10:04:21",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5874",
        "InterviewEndDate": "2023-09-08 10:12:02",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TAS",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5875",
        "InterviewEndDate": "2023-09-10 17:24:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5876",
        "InterviewEndDate": "2023-09-08 16:58:28",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5877",
        "InterviewEndDate": "2023-09-08 17:04:18",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "DMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5878",
        "InterviewEndDate": "2023-09-08 17:26:08",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5879",
        "InterviewEndDate": "2023-09-08 17:32:02",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5880",
        "InterviewEndDate": "2023-09-10 02:57:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5881",
        "InterviewEndDate": "2023-09-10 03:03:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5882",
        "InterviewEndDate": "2023-09-10 03:10:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5883",
        "InterviewEndDate": "2023-09-10 03:15:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5884",
        "InterviewEndDate": "2023-09-10 09:33:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5885",
        "InterviewEndDate": "2023-09-10 09:35:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5886",
        "InterviewEndDate": "2023-09-10 09:41:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5887",
        "InterviewEndDate": "2023-09-10 09:49:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5888",
        "InterviewEndDate": "2023-09-10 17:32:39",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5889",
        "InterviewEndDate": "2023-09-11 02:36:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5890",
        "InterviewEndDate": "2023-09-11 02:54:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5891",
        "InterviewEndDate": "2023-09-11 02:57:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5892",
        "InterviewEndDate": "2023-09-11 03:05:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5893",
        "InterviewEndDate": "2023-09-11 03:21:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5894",
        "InterviewEndDate": "2023-09-11 03:25:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5895",
        "InterviewEndDate": "2023-09-11 10:01:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5896",
        "InterviewEndDate": "2023-09-11 15:47:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5897",
        "InterviewEndDate": "2023-09-11 15:54:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5898",
        "InterviewEndDate": "2023-09-11 15:59:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5899",
        "InterviewEndDate": "2023-09-12 16:11:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5900",
        "InterviewEndDate": "2023-09-12 02:32:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5901",
        "InterviewEndDate": "2023-09-12 02:40:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5902",
        "InterviewEndDate": "2023-09-12 02:46:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5903",
        "InterviewEndDate": "2023-09-12 02:53:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5904",
        "InterviewEndDate": "2023-09-12 03:04:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5905",
        "InterviewEndDate": "2023-09-13 18:44:44",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5906",
        "InterviewEndDate": "2023-09-13 18:47:50",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5907",
        "InterviewEndDate": "2023-09-13 18:52:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5908",
        "InterviewEndDate": "2023-09-13 19:00:01",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5909",
        "InterviewEndDate": "2023-09-13 19:05:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5910",
        "InterviewEndDate": "2023-09-13 19:27:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5911",
        "InterviewEndDate": "2023-09-13 19:32:42",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5912",
        "InterviewEndDate": "2023-09-13 20:18:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5913",
        "InterviewEndDate": "2023-09-14 18:34:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5914",
        "InterviewEndDate": "2023-09-14 19:06:30",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5915",
        "InterviewEndDate": "2023-09-14 19:13:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5916",
        "InterviewEndDate": "2023-09-14 19:19:50",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5917",
        "InterviewEndDate": "2023-09-14 19:30:46",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5918",
        "InterviewEndDate": "2023-09-14 19:43:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5919",
        "InterviewEndDate": "2023-09-14 20:02:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5920",
        "InterviewEndDate": "2023-09-14 20:30:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGP",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5921",
        "InterviewEndDate": "2023-09-14 20:57:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5922",
        "InterviewEndDate": "2023-09-14 21:20:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5923",
        "InterviewEndDate": "2023-09-14 21:58:33",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5924",
        "InterviewEndDate": "2023-09-14 23:40:57",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5925",
        "InterviewEndDate": "2023-09-15 02:40:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5926",
        "InterviewEndDate": "2023-09-15 02:46:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5927",
        "InterviewEndDate": "2023-09-15 02:53:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5928",
        "InterviewEndDate": "2023-09-15 03:00:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5929",
        "InterviewEndDate": "2023-09-15 19:08:36",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5930",
        "InterviewEndDate": "2023-09-15 19:21:10",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5931",
        "InterviewEndDate": "2023-09-15 21:33:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5932",
        "InterviewEndDate": "2023-09-15 21:51:09",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MLE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5933",
        "InterviewEndDate": "2023-09-15 22:19:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5934",
        "InterviewEndDate": "2023-09-16 08:04:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5935",
        "InterviewEndDate": "2023-09-18 07:05:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5936",
        "InterviewEndDate": "2023-09-18 07:13:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5937",
        "InterviewEndDate": "2023-09-18 07:34:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5938",
        "InterviewEndDate": "2023-09-18 07:40:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5939",
        "InterviewEndDate": "2023-09-18 07:50:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5940",
        "InterviewEndDate": "2023-09-18 08:55:35",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5941",
        "InterviewEndDate": "2023-09-18 09:02:39",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5942",
        "InterviewEndDate": "2023-09-18 09:09:36",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5943",
        "InterviewEndDate": "2023-09-18 09:12:18",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5944",
        "InterviewEndDate": "2023-09-19 02:58:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5945",
        "InterviewEndDate": "2023-09-19 03:03:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5946",
        "InterviewEndDate": "2023-09-19 03:06:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5947",
        "InterviewEndDate": "2023-09-19 03:16:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5948",
        "InterviewEndDate": "2023-09-19 03:21:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5949",
        "InterviewEndDate": "2023-09-19 03:24:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5950",
        "InterviewEndDate": "2023-09-19 21:37:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5951",
        "InterviewEndDate": "2023-09-19 21:41:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5952",
        "InterviewEndDate": "2023-09-19 21:50:44",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CCJ",
        "AirlineCode": "IX",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5953",
        "InterviewEndDate": "2023-09-20 02:22:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5954",
        "InterviewEndDate": "2023-09-20 02:30:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5955",
        "InterviewEndDate": "2023-09-20 02:34:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5956",
        "InterviewEndDate": "2023-09-20 02:53:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5957",
        "InterviewEndDate": "2023-09-20 02:58:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5958",
        "InterviewEndDate": "2023-09-20 03:06:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5959",
        "InterviewEndDate": "2023-09-20 03:09:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5960",
        "InterviewEndDate": "2023-09-20 03:14:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5961",
        "InterviewEndDate": "2023-09-20 09:45:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5963",
        "InterviewEndDate": "2023-09-20 09:49:26",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AQJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5964",
        "InterviewEndDate": "2023-09-20 14:55:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5965",
        "InterviewEndDate": "2023-09-20 15:01:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5966",
        "InterviewEndDate": "2023-09-20 15:05:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TLV",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5967",
        "InterviewEndDate": "2023-09-20 15:10:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5968",
        "InterviewEndDate": "2023-09-20 16:14:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5969",
        "InterviewEndDate": "2023-09-20 16:25:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5970",
        "InterviewEndDate": "2023-09-20 16:29:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5971",
        "InterviewEndDate": "2023-09-20 16:53:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5972",
        "InterviewEndDate": "2023-09-20 17:35:56",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5973",
        "InterviewEndDate": "2023-09-21 05:22:25",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5974",
        "InterviewEndDate": "2023-09-21 02:42:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5975",
        "InterviewEndDate": "2023-09-21 02:48:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5976",
        "InterviewEndDate": "2023-09-21 03:01:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5977",
        "InterviewEndDate": "2023-09-21 03:08:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5978",
        "InterviewEndDate": "2023-09-21 03:13:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5979",
        "InterviewEndDate": "2023-09-21 03:18:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5980",
        "InterviewEndDate": "2023-09-22 01:48:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5981",
        "InterviewEndDate": "2023-09-22 01:53:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5982",
        "InterviewEndDate": "2023-09-22 01:59:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5983",
        "InterviewEndDate": "2023-09-22 03:01:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5984",
        "InterviewEndDate": "2023-09-22 03:07:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5985",
        "InterviewEndDate": "2023-09-22 03:18:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5986",
        "InterviewEndDate": "2023-09-22 03:26:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5987",
        "InterviewEndDate": "2023-09-22 15:18:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5988",
        "InterviewEndDate": "2023-09-22 15:21:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5989",
        "InterviewEndDate": "2023-09-22 15:30:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "GVA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5990",
        "InterviewEndDate": "2023-09-22 15:38:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5991",
        "InterviewEndDate": "2023-09-22 15:48:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5992",
        "InterviewEndDate": "2023-09-22 15:56:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5993",
        "InterviewEndDate": "2023-09-22 16:04:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5994",
        "InterviewEndDate": "2023-09-22 19:24:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5995",
        "InterviewEndDate": "2023-09-22 19:26:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5996",
        "InterviewEndDate": "2023-09-22 19:29:18",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "5997",
        "InterviewEndDate": "2023-09-23 15:31:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5998",
        "InterviewEndDate": "2023-09-23 15:37:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BEY",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "5999",
        "InterviewEndDate": "2023-09-23 15:43:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6000",
        "InterviewEndDate": "2023-09-23 15:52:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6001",
        "InterviewEndDate": "2023-09-23 15:57:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6002",
        "InterviewEndDate": "2023-09-23 16:00:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6003",
        "InterviewEndDate": "2023-09-23 18:38:41",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6004",
        "InterviewEndDate": "2023-09-23 18:43:32",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6005",
        "InterviewEndDate": "2023-09-23 19:39:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ICN",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6006",
        "InterviewEndDate": "2023-09-24 01:31:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6007",
        "InterviewEndDate": "2023-09-24 01:35:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6008",
        "InterviewEndDate": "2023-09-24 01:42:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6009",
        "InterviewEndDate": "2023-09-24 01:46:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6010",
        "InterviewEndDate": "2023-09-24 01:57:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6011",
        "InterviewEndDate": "2023-09-24 02:02:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6012",
        "InterviewEndDate": "2023-09-24 02:08:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6013",
        "InterviewEndDate": "2023-09-24 02:13:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6014",
        "InterviewEndDate": "2023-09-25 03:20:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6015",
        "InterviewEndDate": "2023-09-25 03:25:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6016",
        "InterviewEndDate": "2023-09-25 03:30:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6017",
        "InterviewEndDate": "2023-09-25 03:35:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6018",
        "InterviewEndDate": "2023-09-25 07:54:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6019",
        "InterviewEndDate": "2023-09-25 07:59:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6020",
        "InterviewEndDate": "2023-09-25 16:24:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6021",
        "InterviewEndDate": "2023-09-25 16:35:12",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6022",
        "InterviewEndDate": "2023-09-25 16:46:08",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6023",
        "InterviewEndDate": "2023-09-25 16:56:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6024",
        "InterviewEndDate": "2023-09-25 17:14:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6025",
        "InterviewEndDate": "2023-09-25 17:26:37",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6026",
        "InterviewEndDate": "2023-09-25 17:38:51",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6027",
        "InterviewEndDate": "2023-09-25 18:25:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6028",
        "InterviewEndDate": "2023-09-25 18:31:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6029",
        "InterviewEndDate": "2023-09-27 03:28:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6030",
        "InterviewEndDate": "2023-09-27 03:36:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6031",
        "InterviewEndDate": "2023-09-28 02:27:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6032",
        "InterviewEndDate": "2023-09-28 02:32:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6033",
        "InterviewEndDate": "2023-09-28 02:40:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6034",
        "InterviewEndDate": "2023-09-28 05:35:33",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6035",
        "InterviewEndDate": "2023-09-28 05:41:15",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6036",
        "InterviewEndDate": "2023-09-28 08:51:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6037",
        "InterviewEndDate": "2023-09-28 08:56:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6038",
        "InterviewEndDate": "2023-09-28 09:07:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6039",
        "InterviewEndDate": "2023-09-28 09:13:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6040",
        "InterviewEndDate": "2023-09-28 09:22:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6041",
        "InterviewEndDate": "2023-09-28 09:30:01",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6042",
        "InterviewEndDate": "2023-09-28 09:36:52",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6044",
        "InterviewEndDate": "2023-09-28 09:46:35",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "EVN",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6045",
        "InterviewEndDate": "2023-09-29 02:37:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6046",
        "InterviewEndDate": "2023-09-29 02:41:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6047",
        "InterviewEndDate": "2023-09-29 02:46:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6048",
        "InterviewEndDate": "2023-09-29 02:51:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6049",
        "InterviewEndDate": "2023-09-29 02:56:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6050",
        "InterviewEndDate": "2023-09-29 02:59:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6051",
        "InterviewEndDate": "2023-09-29 05:28:52",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6052",
        "InterviewEndDate": "2023-09-29 05:37:28",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6053",
        "InterviewEndDate": "2023-09-29 05:41:17",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6054",
        "InterviewEndDate": "2023-09-29 08:18:59",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SLL",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6055",
        "InterviewEndDate": "2023-09-29 08:27:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6056",
        "InterviewEndDate": "2023-09-29 08:39:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6057",
        "InterviewEndDate": "2023-09-29 14:07:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6058",
        "InterviewEndDate": "2023-09-29 14:19:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6059",
        "InterviewEndDate": "2023-09-29 14:26:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6060",
        "InterviewEndDate": "2023-09-29 14:30:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6061",
        "InterviewEndDate": "2023-09-29 14:37:24",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6062",
        "InterviewEndDate": "2023-09-29 17:56:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "DME",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6063",
        "InterviewEndDate": "2023-09-29 18:00:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6064",
        "InterviewEndDate": "2023-09-29 18:10:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6066",
        "InterviewEndDate": "2023-09-30 02:01:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6067",
        "InterviewEndDate": "2023-09-30 02:14:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6068",
        "InterviewEndDate": "2023-09-30 02:20:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6069",
        "InterviewEndDate": "2023-09-30 03:02:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6070",
        "InterviewEndDate": "2023-09-30 03:06:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6071",
        "InterviewEndDate": "2023-09-30 03:18:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6072",
        "InterviewEndDate": "2023-09-30 04:04:01",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6073",
        "InterviewEndDate": "2023-09-30 04:09:06",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6074",
        "InterviewEndDate": "2023-09-30 04:14:42",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6075",
        "InterviewEndDate": "2023-09-30 04:22:59",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6076",
        "InterviewEndDate": "2023-09-30 04:26:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6077",
        "InterviewEndDate": "2023-09-30 04:31:35",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6078",
        "InterviewEndDate": "2023-10-01 18:55:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6079",
        "InterviewEndDate": "2023-10-01 19:06:21",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6080",
        "InterviewEndDate": "2023-10-01 19:15:34",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6081",
        "InterviewEndDate": "2023-10-01 19:21:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6082",
        "InterviewEndDate": "2023-10-01 19:40:47",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6083",
        "InterviewEndDate": "2023-10-01 19:46:09",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6084",
        "InterviewEndDate": "2023-10-02 16:29:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6085",
        "InterviewEndDate": "2023-10-02 16:34:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6086",
        "InterviewEndDate": "2023-10-02 16:38:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6087",
        "InterviewEndDate": "2023-10-02 19:27:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6088",
        "InterviewEndDate": "2023-10-02 21:21:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6089",
        "InterviewEndDate": "2023-10-02 21:41:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6090",
        "InterviewEndDate": "2023-10-03 19:12:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6091",
        "InterviewEndDate": "2023-10-03 19:16:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6092",
        "InterviewEndDate": "2023-10-03 19:22:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6093",
        "InterviewEndDate": "2023-10-06 09:05:23",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6094",
        "InterviewEndDate": "2023-10-06 09:10:41",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6095",
        "InterviewEndDate": "2023-10-06 09:18:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6096",
        "InterviewEndDate": "2023-10-06 09:32:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6097",
        "InterviewEndDate": "2023-10-07 06:54:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6098",
        "InterviewEndDate": "2023-10-07 06:58:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6099",
        "InterviewEndDate": "2023-10-07 07:36:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6100",
        "InterviewEndDate": "2023-10-07 07:44:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6101",
        "InterviewEndDate": "2023-10-07 07:51:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6102",
        "InterviewEndDate": "2023-10-07 18:55:49",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6103",
        "InterviewEndDate": "2023-10-07 19:02:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6104",
        "InterviewEndDate": "2023-10-07 19:07:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6105",
        "InterviewEndDate": "2023-10-08 02:47:10",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6106",
        "InterviewEndDate": "2023-10-08 03:00:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6107",
        "InterviewEndDate": "2023-10-08 03:02:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6108",
        "InterviewEndDate": "2023-10-08 03:06:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6109",
        "InterviewEndDate": "2023-10-08 03:13:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6110",
        "InterviewEndDate": "2023-10-08 10:16:30",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6111",
        "InterviewEndDate": "2023-10-08 17:47:42",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6112",
        "InterviewEndDate": "2023-10-08 18:10:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6113",
        "InterviewEndDate": "2023-10-09 02:36:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6114",
        "InterviewEndDate": "2023-10-09 02:42:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6115",
        "InterviewEndDate": "2023-10-09 02:52:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6116",
        "InterviewEndDate": "2023-10-09 02:56:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6117",
        "InterviewEndDate": "2023-10-09 03:09:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6118",
        "InterviewEndDate": "2023-10-09 03:16:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6119",
        "InterviewEndDate": "2023-10-09 09:25:34",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6120",
        "InterviewEndDate": "2023-10-09 09:30:03",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6121",
        "InterviewEndDate": "2023-10-10 17:35:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6122",
        "InterviewEndDate": "2023-10-10 19:28:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6123",
        "InterviewEndDate": "2023-10-10 19:31:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6124",
        "InterviewEndDate": "2023-10-10 19:38:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6125",
        "InterviewEndDate": "2023-10-10 19:45:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HKT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6126",
        "InterviewEndDate": "2023-10-10 21:49:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6127",
        "InterviewEndDate": "2023-10-10 21:55:37",
        "InterviewState": "Complete",
        "Flight": "RB - Syrian Arab Airlines",
        "Dest": "DAM",
        "AirlineCode": "RB",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6128",
        "InterviewEndDate": "2023-10-11 03:31:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6129",
        "InterviewEndDate": "2023-10-11 03:37:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6130",
        "InterviewEndDate": "2023-10-11 03:47:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6131",
        "InterviewEndDate": "2023-10-11 03:53:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6132",
        "InterviewEndDate": "2023-10-11 03:58:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6133",
        "InterviewEndDate": "2023-10-11 16:35:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6134",
        "InterviewEndDate": "2023-10-11 16:38:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IST",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6135",
        "InterviewEndDate": "2023-10-11 18:34:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6136",
        "InterviewEndDate": "2023-10-11 18:42:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6137",
        "InterviewEndDate": "2023-10-11 18:54:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6138",
        "InterviewEndDate": "2023-10-11 19:02:45",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6139",
        "InterviewEndDate": "2023-10-12 03:53:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CCJ",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6140",
        "InterviewEndDate": "2023-10-12 03:59:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CCU",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6141",
        "InterviewEndDate": "2023-10-12 04:02:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CCU",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6142",
        "InterviewEndDate": "2023-10-12 04:30:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6143",
        "InterviewEndDate": "2023-10-12 16:40:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6144",
        "InterviewEndDate": "2023-10-12 16:45:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6145",
        "InterviewEndDate": "2023-10-12 19:45:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6146",
        "InterviewEndDate": "2023-10-12 22:28:22",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6147",
        "InterviewEndDate": "2023-10-13 04:58:41",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6148",
        "InterviewEndDate": "2023-10-13 08:20:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6149",
        "InterviewEndDate": "2023-10-14 14:35:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6150",
        "InterviewEndDate": "2023-10-14 14:38:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6151",
        "InterviewEndDate": "2023-10-14 14:44:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6152",
        "InterviewEndDate": "2023-10-14 14:51:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6153",
        "InterviewEndDate": "2023-10-14 14:56:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6154",
        "InterviewEndDate": "2023-10-14 15:01:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6155",
        "InterviewEndDate": "2023-10-14 15:10:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6156",
        "InterviewEndDate": "2023-10-14 15:15:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6157",
        "InterviewEndDate": "2023-10-15 07:57:47",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6158",
        "InterviewEndDate": "2023-10-15 08:07:47",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6160",
        "InterviewEndDate": "2023-10-15 08:26:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6161",
        "InterviewEndDate": "2023-10-16 02:51:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6162",
        "InterviewEndDate": "2023-10-16 03:01:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6163",
        "InterviewEndDate": "2023-10-16 03:06:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6164",
        "InterviewEndDate": "2023-10-16 03:29:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6165",
        "InterviewEndDate": "2023-10-16 09:41:55",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6166",
        "InterviewEndDate": "2023-10-16 09:51:34",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6167",
        "InterviewEndDate": "2023-10-16 09:53:01",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6168",
        "InterviewEndDate": "2023-10-16 15:06:01",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BUD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6169",
        "InterviewEndDate": "2023-10-16 15:17:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6170",
        "InterviewEndDate": "2023-10-16 15:29:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6171",
        "InterviewEndDate": "2023-10-16 15:40:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6172",
        "InterviewEndDate": "2023-10-16 15:45:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "VIE",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6173",
        "InterviewEndDate": "2023-10-16 21:20:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6174",
        "InterviewEndDate": "2023-10-17 02:58:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6175",
        "InterviewEndDate": "2023-10-17 03:00:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6176",
        "InterviewEndDate": "2023-10-17 03:10:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6177",
        "InterviewEndDate": "2023-10-17 03:14:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6178",
        "InterviewEndDate": "2023-10-17 03:17:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6179",
        "InterviewEndDate": "2023-10-17 09:44:05",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6180",
        "InterviewEndDate": "2023-10-17 09:47:35",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6181",
        "InterviewEndDate": "2023-10-17 09:50:28",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6182",
        "InterviewEndDate": "2023-10-18 03:05:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6183",
        "InterviewEndDate": "2023-10-18 03:12:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6184",
        "InterviewEndDate": "2023-10-18 03:17:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6185",
        "InterviewEndDate": "2023-10-18 09:26:43",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6186",
        "InterviewEndDate": "2023-10-18 09:31:07",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6187",
        "InterviewEndDate": "2023-10-18 09:38:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6188",
        "InterviewEndDate": "2023-10-18 14:56:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6189",
        "InterviewEndDate": "2023-10-18 15:05:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6190",
        "InterviewEndDate": "2023-10-18 15:14:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6191",
        "InterviewEndDate": "2023-10-18 22:44:20",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "SJJ",
        "AirlineCode": "5W",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6192",
        "InterviewEndDate": "2023-10-19 14:43:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6193",
        "InterviewEndDate": "2023-10-19 14:47:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6194",
        "InterviewEndDate": "2023-10-19 15:07:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6195",
        "InterviewEndDate": "2023-10-19 15:10:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6196",
        "InterviewEndDate": "2023-10-19 18:43:29",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6197",
        "InterviewEndDate": "2023-10-19 19:14:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6198",
        "InterviewEndDate": "2023-10-19 19:19:11",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6199",
        "InterviewEndDate": "2023-10-19 19:25:38",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6200",
        "InterviewEndDate": "2023-10-20 14:43:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6201",
        "InterviewEndDate": "2023-10-20 14:48:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6202",
        "InterviewEndDate": "2023-10-20 14:56:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6203",
        "InterviewEndDate": "2023-10-20 19:24:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6204",
        "InterviewEndDate": "2023-10-20 19:31:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6205",
        "InterviewEndDate": "2023-10-21 01:49:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6206",
        "InterviewEndDate": "2023-10-21 01:57:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6207",
        "InterviewEndDate": "2023-10-21 02:01:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6208",
        "InterviewEndDate": "2023-10-21 02:15:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6209",
        "InterviewEndDate": "2023-10-21 02:20:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6210",
        "InterviewEndDate": "2023-10-21 02:24:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6211",
        "InterviewEndDate": "2023-10-21 16:02:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6212",
        "InterviewEndDate": "2023-10-21 16:05:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6213",
        "InterviewEndDate": "2023-10-21 16:11:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6214",
        "InterviewEndDate": "2023-10-21 16:15:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6215",
        "InterviewEndDate": "2023-10-21 16:18:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6216",
        "InterviewEndDate": "2023-10-21 18:16:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6217",
        "InterviewEndDate": "2023-10-21 18:23:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6218",
        "InterviewEndDate": "2023-10-21 18:50:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6219",
        "InterviewEndDate": "2023-10-21 18:55:27",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6220",
        "InterviewEndDate": "2023-10-22 07:33:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6221",
        "InterviewEndDate": "2023-10-22 07:42:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6222",
        "InterviewEndDate": "2023-10-22 14:19:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6223",
        "InterviewEndDate": "2023-10-22 14:23:56",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6224",
        "InterviewEndDate": "2023-10-22 14:29:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6225",
        "InterviewEndDate": "2023-10-22 14:32:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6226",
        "InterviewEndDate": "2023-10-22 14:36:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6227",
        "InterviewEndDate": "2023-10-22 14:41:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BCN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6228",
        "InterviewEndDate": "2023-10-22 14:44:32",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6229",
        "InterviewEndDate": "2023-10-22 15:01:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6230",
        "InterviewEndDate": "2023-10-23 07:17:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6231",
        "InterviewEndDate": "2023-10-23 07:23:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6233",
        "InterviewEndDate": "2023-10-23 07:57:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6234",
        "InterviewEndDate": "2023-10-23 08:02:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6235",
        "InterviewEndDate": "2023-10-23 08:07:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6236",
        "InterviewEndDate": "2023-10-25 02:16:29",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6237",
        "InterviewEndDate": "2023-10-25 02:19:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6238",
        "InterviewEndDate": "2023-10-25 02:34:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6239",
        "InterviewEndDate": "2023-10-25 02:37:40",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "ISB",
        "AirlineCode": "TK",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6240",
        "InterviewEndDate": "2023-10-25 02:52:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6241",
        "InterviewEndDate": "2023-10-25 02:51:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6242",
        "InterviewEndDate": "2023-10-25 03:04:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6243",
        "InterviewEndDate": "2023-10-25 03:09:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6244",
        "InterviewEndDate": "2023-10-25 03:13:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6245",
        "InterviewEndDate": "2023-10-25 09:22:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6246",
        "InterviewEndDate": "2023-10-27 17:59:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6247",
        "InterviewEndDate": "2023-10-25 09:32:23",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6248",
        "InterviewEndDate": "2023-10-25 13:47:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6249",
        "InterviewEndDate": "2023-10-25 14:32:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6250",
        "InterviewEndDate": "2023-10-25 14:38:02",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6251",
        "InterviewEndDate": "2023-10-25 14:45:15",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6252",
        "InterviewEndDate": "2023-10-25 14:49:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MXP",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6253",
        "InterviewEndDate": "2023-10-25 14:58:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "IAD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6254",
        "InterviewEndDate": "2023-10-25 15:05:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6255",
        "InterviewEndDate": "2023-10-25 15:15:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6256",
        "InterviewEndDate": "2023-10-25 15:22:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6257",
        "InterviewEndDate": "2023-10-25 15:27:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6258",
        "InterviewEndDate": "2023-10-25 15:35:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6259",
        "InterviewEndDate": "2023-10-26 02:23:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6260",
        "InterviewEndDate": "2023-10-26 02:26:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6261",
        "InterviewEndDate": "2023-10-26 02:31:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6262",
        "InterviewEndDate": "2023-10-26 02:42:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6263",
        "InterviewEndDate": "2023-10-26 02:52:42",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6264",
        "InterviewEndDate": "2023-10-26 03:00:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6265",
        "InterviewEndDate": "2023-10-26 03:04:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6266",
        "InterviewEndDate": "2023-10-26 09:35:34",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6267",
        "InterviewEndDate": "2023-10-26 09:39:53",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6268",
        "InterviewEndDate": "2023-10-26 09:43:39",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6269",
        "InterviewEndDate": "2023-10-26 09:47:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "LYP",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6270",
        "InterviewEndDate": "2023-10-26 09:55:40",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KWI",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6271",
        "InterviewEndDate": "2023-10-26 12:18:43",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6272",
        "InterviewEndDate": "2023-10-26 12:21:40",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6274",
        "InterviewEndDate": "2023-10-27 02:36:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6275",
        "InterviewEndDate": "2023-10-27 03:06:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6276",
        "InterviewEndDate": "2023-10-27 03:09:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6277",
        "InterviewEndDate": "2023-10-27 03:18:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6278",
        "InterviewEndDate": "2023-10-27 07:43:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6279",
        "InterviewEndDate": "2023-10-27 07:47:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6280",
        "InterviewEndDate": "2023-10-27 07:51:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6281",
        "InterviewEndDate": "2023-10-27 08:01:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6282",
        "InterviewEndDate": "2023-10-27 08:08:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6283",
        "InterviewEndDate": "2023-10-27 15:13:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6284",
        "InterviewEndDate": "2023-10-27 15:18:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6285",
        "InterviewEndDate": "2023-10-27 19:05:02",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6286",
        "InterviewEndDate": "2023-10-28 16:06:28",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6287",
        "InterviewEndDate": "2023-10-27 19:39:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SIN",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6288",
        "InterviewEndDate": "2023-10-27 19:50:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6289",
        "InterviewEndDate": "2023-10-27 20:05:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "NRT",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6290",
        "InterviewEndDate": "2023-10-27 20:15:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6291",
        "InterviewEndDate": "2023-10-27 20:22:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "DME",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6292",
        "InterviewEndDate": "2023-10-28 02:55:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6293",
        "InterviewEndDate": "2023-10-28 03:02:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6294",
        "InterviewEndDate": "2023-10-28 03:07:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6295",
        "InterviewEndDate": "2023-10-28 03:11:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6296",
        "InterviewEndDate": "2023-10-28 03:16:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6297",
        "InterviewEndDate": "2023-10-28 03:21:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6298",
        "InterviewEndDate": "2023-10-28 03:25:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6299",
        "InterviewEndDate": "2023-10-28 03:31:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6300",
        "InterviewEndDate": "2023-10-28 03:35:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6301",
        "InterviewEndDate": "2023-10-28 03:40:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6302",
        "InterviewEndDate": "2023-10-28 03:45:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6303",
        "InterviewEndDate": "2023-10-28 03:52:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6304",
        "InterviewEndDate": "2023-10-28 17:52:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6305",
        "InterviewEndDate": "2023-10-28 17:56:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MUC",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6306",
        "InterviewEndDate": "2023-10-28 18:03:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6307",
        "InterviewEndDate": "2023-10-28 18:07:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6308",
        "InterviewEndDate": "2023-10-28 18:16:59",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "SAW",
        "AirlineCode": "3L",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6309",
        "InterviewEndDate": "2023-10-28 18:28:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6310",
        "InterviewEndDate": "2023-10-28 18:42:54",
        "InterviewState": "Complete",
        "Flight": "UL - Srilankan Airlines",
        "Dest": "CMB",
        "AirlineCode": "UL",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6311",
        "InterviewEndDate": "2023-10-28 18:48:47",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "AMD",
        "AirlineCode": "6E",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6312",
        "InterviewEndDate": "2023-10-29 00:16:28",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6313",
        "InterviewEndDate": "2023-10-29 00:21:07",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6314",
        "InterviewEndDate": "2023-10-29 00:28:53",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6315",
        "InterviewEndDate": "2023-10-29 00:38:04",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6316",
        "InterviewEndDate": "2023-10-29 00:42:29",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6317",
        "InterviewEndDate": "2023-10-29 01:14:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6318",
        "InterviewEndDate": "2023-10-29 01:17:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6319",
        "InterviewEndDate": "2023-10-29 01:26:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MNL",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6320",
        "InterviewEndDate": "2023-10-29 01:29:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6321",
        "InterviewEndDate": "2023-10-29 02:19:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6322",
        "InterviewEndDate": "2023-10-29 02:22:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6323",
        "InterviewEndDate": "2023-10-29 02:25:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6324",
        "InterviewEndDate": "2023-10-29 02:28:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6325",
        "InterviewEndDate": "2023-10-29 02:32:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T3"
    },
    {
        "InterviewId": "6326",
        "InterviewEndDate": "2023-10-29 02:36:11",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6327",
        "InterviewEndDate": "2023-10-29 02:39:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6328",
        "InterviewEndDate": "2023-10-29 02:44:28",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6329",
        "InterviewEndDate": "2023-10-29 02:48:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6330",
        "InterviewEndDate": "2023-10-29 02:51:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6331",
        "InterviewEndDate": "2023-10-29 02:55:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6332",
        "InterviewEndDate": "2023-10-29 03:00:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T1"
    },
    {
        "InterviewId": "6334",
        "InterviewEndDate": "2023-11-04 17:02:49",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "FCO",
        "AirlineCode": "5W",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6335",
        "InterviewEndDate": "2023-11-04 17:11:47",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "FCO",
        "AirlineCode": "5W",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6336",
        "InterviewEndDate": "2023-11-05 06:42:47",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6338",
        "InterviewEndDate": "2023-11-05 06:48:21",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6339",
        "InterviewEndDate": "2023-11-05 06:56:10",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6341",
        "InterviewEndDate": "2023-11-05 07:01:19",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6342",
        "InterviewEndDate": "2023-11-05 07:06:11",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6343",
        "InterviewEndDate": "2023-11-06 21:47:11",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "ISB",
        "AirlineCode": "PK",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6344",
        "InterviewEndDate": "2023-11-05 20:30:37",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6345",
        "InterviewEndDate": "2023-11-05 20:39:38",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6346",
        "InterviewEndDate": "2023-11-05 20:44:53",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6350",
        "InterviewEndDate": "2023-11-06 22:01:53",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6351",
        "InterviewEndDate": "2023-11-06 22:04:05",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6352",
        "InterviewEndDate": "2023-11-06 22:09:53",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6354",
        "InterviewEndDate": "2023-11-09 09:05:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6355",
        "InterviewEndDate": "2023-11-09 09:16:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6356",
        "InterviewEndDate": "2023-11-09 12:58:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6357",
        "InterviewEndDate": "2023-11-09 13:02:59",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T6"
    },
    {
        "InterviewId": "6361",
        "InterviewEndDate": "2023-11-20 16:25:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6362",
        "InterviewEndDate": "2023-11-20 16:29:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6363",
        "InterviewEndDate": "2023-11-20 16:54:24",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6364",
        "InterviewEndDate": "2023-11-20 16:57:50",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6365",
        "InterviewEndDate": "2023-11-21 17:51:01",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T"
    },
    {
        "InterviewId": "6366",
        "InterviewEndDate": "2023-11-21 18:13:11",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6367",
        "InterviewEndDate": "2023-11-21 18:20:54",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6368",
        "InterviewEndDate": "2023-11-22 08:06:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6369",
        "InterviewEndDate": "2023-11-22 01:44:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6370",
        "InterviewEndDate": "2023-11-22 01:49:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6371",
        "InterviewEndDate": "2023-11-22 01:55:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6372",
        "InterviewEndDate": "2023-11-22 02:01:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6373",
        "InterviewEndDate": "2023-11-22 02:07:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6374",
        "InterviewEndDate": "2023-11-22 02:24:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6375",
        "InterviewEndDate": "2023-11-22 02:54:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6376",
        "InterviewEndDate": "2023-11-22 02:58:49",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6377",
        "InterviewEndDate": "2023-11-22 03:05:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6378",
        "InterviewEndDate": "2023-11-22 03:19:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6379",
        "InterviewEndDate": "2023-11-22 08:11:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6380",
        "InterviewEndDate": "2023-11-22 08:14:49",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6381",
        "InterviewEndDate": "2023-11-22 08:29:44",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CNN",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6382",
        "InterviewEndDate": "2023-11-22 08:38:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6383",
        "InterviewEndDate": "2023-11-22 08:50:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6384",
        "InterviewEndDate": "2023-11-22 08:53:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6385",
        "InterviewEndDate": "2023-11-22 09:01:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6386",
        "InterviewEndDate": "2023-11-23 01:22:46",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6387",
        "InterviewEndDate": "2023-11-23 03:23:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6388",
        "InterviewEndDate": "2023-11-23 03:27:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6389",
        "InterviewEndDate": "2023-11-23 03:32:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6390",
        "InterviewEndDate": "2023-11-23 03:35:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BLR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6391",
        "InterviewEndDate": "2023-11-23 09:27:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6392",
        "InterviewEndDate": "2023-11-23 09:32:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAA",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6393",
        "InterviewEndDate": "2023-11-23 10:45:07",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6394",
        "InterviewEndDate": "2023-11-23 10:48:15",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6395",
        "InterviewEndDate": "2023-11-23 14:14:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6396",
        "InterviewEndDate": "2023-11-23 13:55:43",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ORD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6398",
        "InterviewEndDate": "2023-11-23 14:45:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6399",
        "InterviewEndDate": "2023-11-23 14:25:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "YYZ",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6400",
        "InterviewEndDate": "2023-11-23 14:56:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6401",
        "InterviewEndDate": "2023-11-23 15:00:35",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6402",
        "InterviewEndDate": "2023-11-23 15:08:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6403",
        "InterviewEndDate": "2023-11-23 15:25:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6404",
        "InterviewEndDate": "2023-11-26 12:41:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6406",
        "InterviewEndDate": "2023-11-23 18:57:32",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6407",
        "InterviewEndDate": "2023-11-23 19:42:30",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MLE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6408",
        "InterviewEndDate": "2023-11-24 02:48:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6409",
        "InterviewEndDate": "2023-11-24 02:51:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6410",
        "InterviewEndDate": "2023-11-24 02:55:31",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6411",
        "InterviewEndDate": "2023-11-24 03:00:36",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6412",
        "InterviewEndDate": "2023-11-24 03:08:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6413",
        "InterviewEndDate": "2023-11-24 03:17:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6414",
        "InterviewEndDate": "2023-11-24 03:23:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6415",
        "InterviewEndDate": "2023-11-27 15:27:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6416",
        "InterviewEndDate": "2023-11-24 10:58:54",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6417",
        "InterviewEndDate": "2023-11-24 11:03:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6418",
        "InterviewEndDate": "2023-11-24 11:11:28",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6419",
        "InterviewEndDate": "2023-11-24 11:18:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6421",
        "InterviewEndDate": "2023-11-24 11:27:24",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MCT",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6422",
        "InterviewEndDate": "2023-11-24 11:33:04",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MCT",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6423",
        "InterviewEndDate": "2023-11-25 02:41:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SVO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6424",
        "InterviewEndDate": "2023-11-25 02:48:08",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCU",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6425",
        "InterviewEndDate": "2023-11-25 02:55:33",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6426",
        "InterviewEndDate": "2023-11-25 03:00:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6428",
        "InterviewEndDate": "2023-11-25 03:13:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6429",
        "InterviewEndDate": "2023-11-25 03:21:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMS",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6430",
        "InterviewEndDate": "2023-11-25 03:27:18",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6431",
        "InterviewEndDate": "2023-11-25 03:30:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6432",
        "InterviewEndDate": "2023-11-25 03:34:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHE",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6433",
        "InterviewEndDate": "2023-11-25 10:46:01",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "PEW",
        "AirlineCode": "PK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6435",
        "InterviewEndDate": "2023-11-25 10:53:19",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "PEW",
        "AirlineCode": "PK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6436",
        "InterviewEndDate": "2023-11-25 10:59:10",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6437",
        "InterviewEndDate": "2023-11-25 11:07:58",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6439",
        "InterviewEndDate": "2023-11-25 11:42:27",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS",
        "Terminal": "T"
    },
    {
        "InterviewId": "6440",
        "InterviewEndDate": "2023-11-26 12:38:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6441",
        "InterviewEndDate": "2023-11-26 12:44:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6442",
        "InterviewEndDate": "2023-11-26 12:50:01",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T"
    },
    {
        "InterviewId": "6443",
        "InterviewEndDate": "2023-11-26 12:56:03",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6444",
        "InterviewEndDate": "2023-11-26 13:06:23",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6446",
        "InterviewEndDate": "2023-11-26 13:32:46",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TBS",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6447",
        "InterviewEndDate": "2023-11-26 13:35:12",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TBS",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6448",
        "InterviewEndDate": "2023-11-26 14:01:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6449",
        "InterviewEndDate": "2023-11-26 13:59:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6450",
        "InterviewEndDate": "2023-11-26 16:46:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MCT",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6452",
        "InterviewEndDate": "2023-11-26 16:53:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6453",
        "InterviewEndDate": "2023-11-26 16:58:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6454",
        "InterviewEndDate": "2023-11-26 17:02:05",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6455",
        "InterviewEndDate": "2023-11-26 17:05:32",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "TRV",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6456",
        "InterviewEndDate": "2023-11-26 22:27:50",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T"
    },
    {
        "InterviewId": "6457",
        "InterviewEndDate": "2023-11-26 22:33:57",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6458",
        "InterviewEndDate": "2023-11-26 22:40:27",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6459",
        "InterviewEndDate": "2023-11-26 22:44:47",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6460",
        "InterviewEndDate": "2023-11-26 22:54:48",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T"
    },
    {
        "InterviewId": "6461",
        "InterviewEndDate": "2023-11-26 23:01:58",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6462",
        "InterviewEndDate": "2023-11-26 23:06:13",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6463",
        "InterviewEndDate": "2023-11-26 23:09:18",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6466",
        "InterviewEndDate": "2023-11-26 23:22:15",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6467",
        "InterviewEndDate": "2023-11-26 23:26:10",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6468",
        "InterviewEndDate": "2023-11-26 23:31:20",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6469",
        "InterviewEndDate": "2023-11-27 07:24:55",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6470",
        "InterviewEndDate": "2023-11-27 08:00:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6471",
        "InterviewEndDate": "2023-11-27 08:05:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6472",
        "InterviewEndDate": "2023-11-27 08:17:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6473",
        "InterviewEndDate": "2023-11-27 08:31:15",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6474",
        "InterviewEndDate": "2023-11-27 08:38:55",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6475",
        "InterviewEndDate": "2023-11-27 09:35:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6478",
        "InterviewEndDate": "2023-11-27 15:32:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6479",
        "InterviewEndDate": "2023-11-27 15:41:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BRU",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6482",
        "InterviewEndDate": "2023-11-27 15:49:36",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BRU",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6483",
        "InterviewEndDate": "2023-11-27 15:56:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6485",
        "InterviewEndDate": "2023-11-27 16:04:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6486",
        "InterviewEndDate": "2023-11-27 16:09:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6487",
        "InterviewEndDate": "2023-11-27 16:12:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6489",
        "InterviewEndDate": "2023-11-27 18:32:34",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ISB",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6490",
        "InterviewEndDate": "2023-11-27 18:44:26",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6491",
        "InterviewEndDate": "2023-11-27 18:48:36",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6492",
        "InterviewEndDate": "2023-11-28 08:04:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HBE",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6493",
        "InterviewEndDate": "2023-11-28 08:17:45",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6494",
        "InterviewEndDate": "2023-11-28 08:33:59",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BAH",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6495",
        "InterviewEndDate": "2023-11-28 08:52:19",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MCT",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6497",
        "InterviewEndDate": "2023-11-28 09:07:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MCT",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6498",
        "InterviewEndDate": "2023-11-28 09:18:03",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "HMB",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6499",
        "InterviewEndDate": "2023-11-28 10:02:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6500",
        "InterviewEndDate": "2023-11-28 14:26:54",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6501",
        "InterviewEndDate": "2023-11-28 14:31:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6502",
        "InterviewEndDate": "2023-11-28 14:37:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6503",
        "InterviewEndDate": "2023-11-28 14:51:03",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FCO",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6504",
        "InterviewEndDate": "2023-11-28 14:56:39",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6505",
        "InterviewEndDate": "2023-11-28 15:53:30",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6506",
        "InterviewEndDate": "2023-11-28 16:08:35",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "BEY",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6507",
        "InterviewEndDate": "2023-11-28 16:19:10",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6508",
        "InterviewEndDate": "2023-11-28 16:28:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6509",
        "InterviewEndDate": "2023-11-28 16:30:35",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T"
    },
    {
        "InterviewId": "6510",
        "InterviewEndDate": "2023-11-28 16:36:27",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6511",
        "InterviewEndDate": "2023-11-28 16:34:06",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T"
    },
    {
        "InterviewId": "6512",
        "InterviewEndDate": "2023-11-28 16:39:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6513",
        "InterviewEndDate": "2023-11-28 16:43:20",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "KTM",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6514",
        "InterviewEndDate": "2023-11-28 16:58:00",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MAD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6515",
        "InterviewEndDate": "2023-11-28 16:59:07",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "OTP",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6516",
        "InterviewEndDate": "2023-11-28 19:01:38",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "KTW",
        "AirlineCode": "",
        "Terminal": "T"
    },
    {
        "InterviewId": "6517",
        "InterviewEndDate": "2023-11-28 19:08:50",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "KTW",
        "AirlineCode": "W6",
        "Terminal": "T"
    },
    {
        "InterviewId": "6518",
        "InterviewEndDate": "2023-11-28 19:14:54",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6519",
        "InterviewEndDate": "2023-11-28 19:24:59",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MLE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6520",
        "InterviewEndDate": "2023-11-28 19:20:33",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6521",
        "InterviewEndDate": "2023-11-28 19:27:57",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6522",
        "InterviewEndDate": "2023-11-28 19:50:33",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MLE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6523",
        "InterviewEndDate": "2023-11-28 19:40:53",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6524",
        "InterviewEndDate": "2023-11-28 20:06:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6525",
        "InterviewEndDate": "2023-11-28 20:16:20",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6526",
        "InterviewEndDate": "2023-11-28 20:33:09",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6527",
        "InterviewEndDate": "2023-11-28 20:41:17",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "BOM",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6528",
        "InterviewEndDate": "2023-11-28 21:05:46",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "GYD",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6529",
        "InterviewEndDate": "2023-11-28 21:14:27",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "AMD",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6530",
        "InterviewEndDate": "2023-11-28 21:18:35",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "AMD",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6531",
        "InterviewEndDate": "2023-11-28 21:25:10",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "AMD",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6532",
        "InterviewEndDate": "2023-11-28 21:39:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6533",
        "InterviewEndDate": "2023-11-28 21:39:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6534",
        "InterviewEndDate": "2023-11-28 22:02:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6535",
        "InterviewEndDate": "2023-11-28 22:10:11",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CCJ",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6536",
        "InterviewEndDate": "2023-11-28 22:16:54",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6537",
        "InterviewEndDate": "2023-11-28 22:12:48",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6538",
        "InterviewEndDate": "2023-11-28 22:19:42",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6539",
        "InterviewEndDate": "2023-11-28 22:18:14",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6541",
        "InterviewEndDate": "2023-11-28 22:27:47",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6542",
        "InterviewEndDate": "2023-11-28 22:30:51",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6543",
        "InterviewEndDate": "2023-11-28 22:30:51",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6544",
        "InterviewEndDate": "2023-11-29 15:40:56",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6545",
        "InterviewEndDate": "2023-11-28 22:34:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6546",
        "InterviewEndDate": "2023-11-28 22:43:17",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6547",
        "InterviewEndDate": "2023-11-28 22:54:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6548",
        "InterviewEndDate": "2023-11-28 23:01:19",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "Terminal": "T"
    },
    {
        "InterviewId": "6550",
        "InterviewEndDate": "2023-11-28 23:11:03",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "Terminal": "T"
    },
    {
        "InterviewId": "6551",
        "InterviewEndDate": "2023-11-28 23:17:01",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "Terminal": "T"
    },
    {
        "InterviewId": "6552",
        "InterviewEndDate": "2023-11-28 23:25:01",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "Terminal": "T"
    },
    {
        "InterviewId": "6553",
        "InterviewEndDate": "2023-11-28 23:28:28",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC",
        "Terminal": "T"
    },
    {
        "InterviewId": "6554",
        "InterviewEndDate": "2023-11-28 23:30:53",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6555",
        "InterviewEndDate": "2023-11-28 23:34:49",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6556",
        "InterviewEndDate": "2023-11-29 17:32:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CDG",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6557",
        "InterviewEndDate": "2023-11-29 17:38:52",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "CLJ",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6558",
        "InterviewEndDate": "2023-11-29 17:44:23",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "CLJ",
        "AirlineCode": "W6",
        "Terminal": "T"
    },
    {
        "InterviewId": "6559",
        "InterviewEndDate": "2023-11-29 17:48:29",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6560",
        "InterviewEndDate": "2023-11-29 17:53:27",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6561",
        "InterviewEndDate": "2023-11-29 17:58:38",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "VIE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6562",
        "InterviewEndDate": "2023-11-29 18:12:41",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6563",
        "InterviewEndDate": "2023-11-29 18:17:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KUL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6564",
        "InterviewEndDate": "2023-11-29 18:28:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6565",
        "InterviewEndDate": "2023-11-29 18:39:31",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6566",
        "InterviewEndDate": "2023-11-29 18:44:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6567",
        "InterviewEndDate": "2023-11-29 18:49:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6568",
        "InterviewEndDate": "2023-11-29 19:03:49",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6569",
        "InterviewEndDate": "2023-11-29 19:08:35",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6570",
        "InterviewEndDate": "2023-11-29 19:11:15",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6571",
        "InterviewEndDate": "2023-11-29 19:18:22",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMM",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6572",
        "InterviewEndDate": "2023-11-29 19:21:26",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6573",
        "InterviewEndDate": "2023-11-29 19:28:12",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "COK",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6574",
        "InterviewEndDate": "2023-11-29 21:11:01",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "ALA",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6575",
        "InterviewEndDate": "2023-11-29 21:18:06",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "ALA",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6576",
        "InterviewEndDate": "2023-11-29 21:24:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "NRT",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6577",
        "InterviewEndDate": "2023-11-29 21:42:12",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "CCJ",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6578",
        "InterviewEndDate": "2023-11-29 21:57:00",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6579",
        "InterviewEndDate": "2023-11-29 22:05:23",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6580",
        "InterviewEndDate": "2023-11-29 22:04:01",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6581",
        "InterviewEndDate": "2023-11-29 22:11:14",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6582",
        "InterviewEndDate": "2023-11-29 22:16:59",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6583",
        "InterviewEndDate": "2023-11-29 22:16:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6584",
        "InterviewEndDate": "2023-11-29 22:15:14",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "COK",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6585",
        "InterviewEndDate": "2023-11-29 22:23:25",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6586",
        "InterviewEndDate": "2023-11-29 22:25:40",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TIA",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6587",
        "InterviewEndDate": "2023-11-29 22:25:41",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TIA",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6588",
        "InterviewEndDate": "2023-11-29 22:26:21",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6589",
        "InterviewEndDate": "2023-11-29 22:37:13",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6590",
        "InterviewEndDate": "2023-11-29 22:41:10",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "LHE",
        "AirlineCode": "PK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6591",
        "InterviewEndDate": "2023-11-29 22:42:08",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "TIA",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6592",
        "InterviewEndDate": "2023-11-29 22:47:20",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6593",
        "InterviewEndDate": "2023-11-29 22:53:27",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T"
    },
    {
        "InterviewId": "6594",
        "InterviewEndDate": "2023-11-29 22:54:01",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6595",
        "InterviewEndDate": "2023-11-29 22:57:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "MLE",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6596",
        "InterviewEndDate": "2023-11-29 23:00:16",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T"
    },
    {
        "InterviewId": "6597",
        "InterviewEndDate": "2023-11-29 23:05:41",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "LKO",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6598",
        "InterviewEndDate": "2023-11-29 23:08:10",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "LKO",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6599",
        "InterviewEndDate": "2023-11-29 23:20:18",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "LKO",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6600",
        "InterviewEndDate": "2023-11-29 23:13:38",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T"
    },
    {
        "InterviewId": "6601",
        "InterviewEndDate": "2023-11-29 23:48:33",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6602",
        "InterviewEndDate": "2023-11-29 23:19:42",
        "InterviewState": "Complete",
        "Flight": "AI - Air India",
        "Dest": "BOM",
        "AirlineCode": "AI",
        "Terminal": "T"
    },
    {
        "InterviewId": "6604",
        "InterviewEndDate": "2023-11-29 23:34:45",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6605",
        "InterviewEndDate": "2023-11-29 23:26:02",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "LKO",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6606",
        "InterviewEndDate": "2023-11-29 23:30:52",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "LKO",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6607",
        "InterviewEndDate": "2023-11-29 23:37:24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6608",
        "InterviewEndDate": "2023-11-29 23:44:06",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6609",
        "InterviewEndDate": "2023-11-29 23:49:55",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6610",
        "InterviewEndDate": "2023-11-29 23:53:15",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6611",
        "InterviewEndDate": "2023-11-29 23:57:00",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "ISB",
        "AirlineCode": "PK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6612",
        "InterviewEndDate": "2023-11-30 00:00:53",
        "InterviewState": "Complete",
        "Flight": "PK - Pakistan International Airlines",
        "Dest": "ISB",
        "AirlineCode": "PK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6614",
        "InterviewEndDate": "2023-11-30 00:14:57",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6615",
        "InterviewEndDate": "2023-12-01 10:40:05",
        "InterviewState": "Complete",
        "Flight": "QR - Qatar Airways",
        "Dest": "DOH",
        "AirlineCode": "QR",
        "Terminal": "T"
    },
    {
        "InterviewId": "6616",
        "InterviewEndDate": "2023-12-01 19:57:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6617",
        "InterviewEndDate": "2023-12-01 20:02:55",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6618",
        "InterviewEndDate": "2023-12-01 20:09:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6619",
        "InterviewEndDate": "2023-12-01 20:21:14",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MCT",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6620",
        "InterviewEndDate": "2023-12-02 04:29:35",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6621",
        "InterviewEndDate": "2023-12-02 04:35:51",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6622",
        "InterviewEndDate": "2023-12-02 04:42:01",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "AMD",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6623",
        "InterviewEndDate": "2023-12-02 05:15:30",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "MAA",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6624",
        "InterviewEndDate": "2023-12-02 15:00:44",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KWI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6625",
        "InterviewEndDate": "2023-12-02 15:30:30",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6626",
        "InterviewEndDate": "2023-12-03 15:39:11",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JFK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6627",
        "InterviewEndDate": "2023-12-03 15:41:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6628",
        "InterviewEndDate": "2023-12-03 15:45:58",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6629",
        "InterviewEndDate": "2023-12-03 15:54:09",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6630",
        "InterviewEndDate": "2023-12-03 17:43:17",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T"
    },
    {
        "InterviewId": "6631",
        "InterviewEndDate": "2023-12-03 17:50:21",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T"
    },
    {
        "InterviewId": "6633",
        "InterviewEndDate": "2023-12-03 22:02:43",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6634",
        "InterviewEndDate": "2023-12-03 22:05:42",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6635",
        "InterviewEndDate": "2023-12-03 22:24:13",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6636",
        "InterviewEndDate": "2023-12-03 22:30:30",
        "InterviewState": "Complete",
        "Flight": "RJ - Royal Jordanian",
        "Dest": "AMM",
        "AirlineCode": "RJ",
        "Terminal": "T"
    },
    {
        "InterviewId": "6637",
        "InterviewEndDate": "2023-12-03 22:54:22",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "BEG",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6638",
        "InterviewEndDate": "2023-12-03 23:01:24",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6639",
        "InterviewEndDate": "2023-12-04 19:34:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6640",
        "InterviewEndDate": "2023-12-04 22:43:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "RUH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6641",
        "InterviewEndDate": "2023-12-04 22:58:44",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "LKO",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6642",
        "InterviewEndDate": "2023-12-05 18:53:03",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "MED",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6643",
        "InterviewEndDate": "2023-12-05 18:58:55",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6644",
        "InterviewEndDate": "2023-12-08 01:38:07",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6645",
        "InterviewEndDate": "2023-12-09 07:46:50",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6646",
        "InterviewEndDate": "2023-12-09 07:51:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6647",
        "InterviewEndDate": "2023-12-09 12:38:07",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6648",
        "InterviewEndDate": "2023-12-09 15:33:02",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "HBE",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6649",
        "InterviewEndDate": "2023-12-09 15:45:25",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DEL",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6650",
        "InterviewEndDate": "2023-12-09 15:50:40",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BRU",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6651",
        "InterviewEndDate": "2023-12-09 16:08:49",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ZRH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6652",
        "InterviewEndDate": "2023-12-10 02:09:20",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6653",
        "InterviewEndDate": "2023-12-10 02:19:47",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6654",
        "InterviewEndDate": "2023-12-10 02:26:46",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "LHR",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6655",
        "InterviewEndDate": "2023-12-10 05:13:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6656",
        "InterviewEndDate": "2023-12-10 08:44:08",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6657",
        "InterviewEndDate": "2023-12-10 08:53:16",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6658",
        "InterviewEndDate": "2023-12-10 09:03:22",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "COK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6659",
        "InterviewEndDate": "2023-12-10 15:14:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6662",
        "InterviewEndDate": "2023-12-10 15:55:23",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "FRA",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6663",
        "InterviewEndDate": "2023-12-10 18:23:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "KHI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6664",
        "InterviewEndDate": "2023-12-10 19:31:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6665",
        "InterviewEndDate": "2023-12-10 19:50:19",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "SYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6666",
        "InterviewEndDate": "2023-12-10 20:30:47",
        "InterviewState": "Complete",
        "Flight": "UK - Tata SIA Airlines",
        "Dest": "BOM",
        "AirlineCode": "UK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6667",
        "InterviewEndDate": "2023-12-10 21:18:13",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BKK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6668",
        "InterviewEndDate": "2023-12-11 00:34:48",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6669",
        "InterviewEndDate": "2023-12-11 10:19:35",
        "InterviewState": "Complete",
        "Flight": "PA - airblue",
        "Dest": "ISB",
        "AirlineCode": "PA",
        "Terminal": "T"
    },
    {
        "InterviewId": "6670",
        "InterviewEndDate": "2023-12-11 10:27:54",
        "InterviewState": "Complete",
        "Flight": "5W - Wizz Air",
        "Dest": "AMM",
        "AirlineCode": "5W",
        "Terminal": "T"
    },
    {
        "InterviewId": "6671",
        "InterviewEndDate": "2023-12-11 10:37:05",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "JED",
        "AirlineCode": "SV",
        "Terminal": "T"
    },
    {
        "InterviewId": "6672",
        "InterviewEndDate": "2023-12-12 09:47:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DOH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6673",
        "InterviewEndDate": "2023-12-12 22:23:51",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "MAA",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6674",
        "InterviewEndDate": "2023-12-12 22:42:50",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6675",
        "InterviewEndDate": "2023-12-12 22:51:05",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK",
        "Terminal": "T"
    },
    {
        "InterviewId": "6676",
        "InterviewEndDate": "2023-12-13 16:03:02",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "DUB",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6677",
        "InterviewEndDate": "2023-12-13 16:17:30",
        "InterviewState": "Complete",
        "Flight": "IX - Air India Express",
        "Dest": "TRV",
        "AirlineCode": "IX",
        "Terminal": "T"
    },
    {
        "InterviewId": "6678",
        "InterviewEndDate": "2023-12-13 16:21:56",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CMN",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6679",
        "InterviewEndDate": "2023-12-13 16:40:15",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "ATH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6680",
        "InterviewEndDate": "2023-12-13 18:30:14",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6681",
        "InterviewEndDate": "2023-12-13 18:47:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6682",
        "InterviewEndDate": "2023-12-13 18:56:06",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6684",
        "InterviewEndDate": "2023-12-13 19:28:37",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "HYD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6685",
        "InterviewEndDate": "2023-12-13 19:54:34",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "DEL",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6686",
        "InterviewEndDate": "2023-12-17 11:54:42",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CMB",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6689",
        "InterviewEndDate": "2023-12-19 03:11:24",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6690",
        "InterviewEndDate": "2023-12-19 03:16:38",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BOM",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6692",
        "InterviewEndDate": "2023-12-19 10:05:58",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T"
    },
    {
        "InterviewId": "6693",
        "InterviewEndDate": "2023-12-19 10:10:36",
        "InterviewState": "Complete",
        "Flight": "SV - Saudia",
        "Dest": "RUH",
        "AirlineCode": "SV",
        "Terminal": "T"
    },
    {
        "InterviewId": "6694",
        "InterviewEndDate": "2023-12-20 02:08:21",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6695",
        "InterviewEndDate": "2023-12-20 02:15:52",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6696",
        "InterviewEndDate": "2023-12-20 02:25:57",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "BAH",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6697",
        "InterviewEndDate": "2023-12-20 02:31:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CCJ",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6698",
        "InterviewEndDate": "2023-12-21 19:22:16",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6699",
        "InterviewEndDate": "2023-12-21 19:26:08",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T"
    },
    {
        "InterviewId": "6700",
        "InterviewEndDate": "2023-12-21 19:33:15",
        "InterviewState": "Complete",
        "Flight": "GF - Gulf Air",
        "Dest": "BAH",
        "AirlineCode": "GF",
        "Terminal": "T"
    },
    {
        "InterviewId": "6701",
        "InterviewEndDate": "2023-12-21 19:42:54",
        "InterviewState": "Complete",
        "Flight": "ME - Middle East Airlines",
        "Dest": "BEY",
        "AirlineCode": "ME",
        "Terminal": "T"
    },
    {
        "InterviewId": "6702",
        "InterviewEndDate": "2023-12-22 19:21:17",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "AMD",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6703",
        "InterviewEndDate": "2023-12-22 19:26:06",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6704",
        "InterviewEndDate": "2023-12-22 19:32:05",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CAI",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6705",
        "InterviewEndDate": "2023-12-23 14:07:47",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6706",
        "InterviewEndDate": "2023-12-23 14:17:30",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "CAI",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6707",
        "InterviewEndDate": "2023-12-24 18:39:04",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6708",
        "InterviewEndDate": "2023-12-24 18:47:12",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "CGK",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6709",
        "InterviewEndDate": "2023-12-24 18:51:13",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TRV",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6710",
        "InterviewEndDate": "2023-12-24 18:58:11",
        "InterviewState": "Complete",
        "Flight": "6E - IndiGo",
        "Dest": "HYD",
        "AirlineCode": "6E",
        "Terminal": "T"
    },
    {
        "InterviewId": "6711",
        "InterviewEndDate": "2023-12-24 19:01:51",
        "InterviewState": "Complete",
        "Flight": "EY - Etihad Airways",
        "Dest": "JED",
        "AirlineCode": "EY",
        "Terminal": "T"
    },
    {
        "InterviewId": "6712",
        "InterviewEndDate": "2023-12-27 14:06:26",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TBS",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6713",
        "InterviewEndDate": "2023-12-27 14:12:29",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TBS",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6714",
        "InterviewEndDate": "2023-12-27 14:19:02",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "TBS",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6715",
        "InterviewEndDate": "2023-12-27 14:24:28",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T"
    },
    {
        "InterviewId": "6716",
        "InterviewEndDate": "2023-12-27 14:29:27",
        "InterviewState": "Complete",
        "Flight": "3L - Air Arabia Abu Dhabi",
        "Dest": "COK",
        "AirlineCode": "3L",
        "Terminal": "T"
    }
]    

 `;