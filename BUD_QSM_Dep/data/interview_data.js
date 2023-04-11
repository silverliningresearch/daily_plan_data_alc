let interview_data_raw = `[
    {
        "InterviewId": "3964",
        "InterviewEndDate": "2023-04-03 06:18:18",
        "InterviewState": "Complete",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "download_time": "11-04-2023 19:56:31"
    },
    {
        "InterviewId": "3965",
        "InterviewEndDate": "2023-04-03 06:13:12",
        "InterviewState": "Complete",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "3966",
        "InterviewEndDate": "2023-04-03 06:17:53",
        "InterviewState": "Complete",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "3967",
        "InterviewEndDate": "2023-04-04 08:22:57",
        "InterviewState": "Complete",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "3968",
        "InterviewEndDate": "2023-04-06 14:30:22",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3969",
        "InterviewEndDate": "2023-04-06 14:38:24",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3970",
        "InterviewEndDate": "2023-04-06 14:29:13",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3971",
        "InterviewEndDate": "2023-04-06 14:39:35",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3972",
        "InterviewEndDate": "2023-04-06 14:41:30",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3973",
        "InterviewEndDate": "2023-04-07 14:34:53",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3974",
        "InterviewEndDate": "2023-04-07 14:36:52",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3975",
        "InterviewEndDate": "2023-04-07 14:43:56",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3976",
        "InterviewEndDate": "2023-04-07 14:41:42",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3977",
        "InterviewEndDate": "2023-04-07 14:44:14",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "3978",
        "InterviewEndDate": "2023-04-07 14:57:54",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3979",
        "InterviewEndDate": "2023-04-07 15:00:36",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3980",
        "InterviewEndDate": "2023-04-07 15:01:16",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "3981",
        "InterviewEndDate": "2023-04-07 15:57:43",
        "InterviewState": "Complete",
        "Flight": "LS 1322",
        "Dest": "BHX",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "3984",
        "InterviewEndDate": "2023-04-09 09:33:16",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3985",
        "InterviewEndDate": "2023-04-09 09:33:01",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3986",
        "InterviewEndDate": "2023-04-09 09:31:03",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "3987",
        "InterviewEndDate": "2023-04-09 11:40:20",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3988",
        "InterviewEndDate": "2023-04-09 11:37:54",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3989",
        "InterviewEndDate": "2023-04-09 11:35:28",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3990",
        "InterviewEndDate": "2023-04-09 11:34:26",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3991",
        "InterviewEndDate": "2023-04-09 11:34:15",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "3993",
        "InterviewEndDate": "2023-04-09 11:44:33",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    }
]    

 `;