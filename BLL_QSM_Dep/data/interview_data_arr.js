let interview_data_arr_raw = `[
    {
        "InterviewId": "2077",
        "InterviewEndDate": "2023-04-03 11:26:50",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS",
        "download_time": "09-04-2023 23:27:19"
    },
    {
        "InterviewId": "2740",
        "InterviewEndDate": "2023-04-03 11:25:01",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "MLA"
    },
    {
        "InterviewId": "2741",
        "InterviewEndDate": "2023-04-03 11:28:15",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "MLA"
    },
    {
        "InterviewId": "2743",
        "InterviewEndDate": "2023-04-03 11:25:00",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "MLA"
    },
    {
        "InterviewId": "2746",
        "InterviewEndDate": "2023-04-03 11:29:11",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "MLA"
    },
    {
        "InterviewId": "2756",
        "InterviewEndDate": "2023-04-03 12:04:05",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2759",
        "InterviewEndDate": "2023-04-03 12:02:03",
        "InterviewState": "Complete",
        "Airline": "Klm",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2763",
        "InterviewEndDate": "2023-04-03 12:05:56",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2765",
        "InterviewEndDate": "2023-04-03 12:02:06",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2787",
        "InterviewEndDate": "2023-04-04 16:45:21",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "FRA"
    },
    {
        "InterviewId": "2792",
        "InterviewEndDate": "2023-04-04 16:42:55",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "FRA"
    },
    {
        "InterviewId": "2793",
        "InterviewEndDate": "2023-04-04 16:40:35",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "FRA"
    },
    {
        "InterviewId": "2794",
        "InterviewEndDate": "2023-04-04 16:42:31",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "FRA"
    },
    {
        "InterviewId": "2795",
        "InterviewEndDate": "2023-04-04 16:44:00",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "FRA"
    },
    {
        "InterviewId": "2797",
        "InterviewEndDate": "2023-04-04 17:31:26",
        "InterviewState": "Complete",
        "Airline": "DK - Sunclass Airlines",
        "Dest": "TFS"
    },
    {
        "InterviewId": "2798",
        "InterviewEndDate": "2023-04-04 17:31:14",
        "InterviewState": "Complete",
        "Airline": "DK - Sunclass Airlines",
        "Dest": "TFS"
    },
    {
        "InterviewId": "2799",
        "InterviewEndDate": "2023-04-04 17:33:43",
        "InterviewState": "Complete",
        "Airline": "DK - Sunclass Airlines",
        "Dest": "TFS"
    },
    {
        "InterviewId": "2800",
        "InterviewEndDate": "2023-04-04 17:29:45",
        "InterviewState": "Complete",
        "Airline": "DK - Sunclass Airlines",
        "Dest": "TFS"
    },
    {
        "InterviewId": "2801",
        "InterviewEndDate": "2023-04-04 17:28:55",
        "InterviewState": "Complete",
        "Airline": "DK - Sunclass Airlines",
        "Dest": "TFS"
    },
    {
        "InterviewId": "2803",
        "InterviewEndDate": "2023-04-05 08:49:30",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "DUB"
    },
    {
        "InterviewId": "2804",
        "InterviewEndDate": "2023-04-05 08:50:32",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "DUB"
    },
    {
        "InterviewId": "2808",
        "InterviewEndDate": "2023-04-05 08:49:58",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "DUB"
    },
    {
        "InterviewId": "2809",
        "InterviewEndDate": "2023-04-05 09:20:27",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "PMI"
    },
    {
        "InterviewId": "2810",
        "InterviewEndDate": "2023-04-05 09:22:39",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "SPC"
    },
    {
        "InterviewId": "2811",
        "InterviewEndDate": "2023-04-05 09:24:18",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "PMI"
    },
    {
        "InterviewId": "2812",
        "InterviewEndDate": "2023-04-05 09:18:30",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "PMI"
    },
    {
        "InterviewId": "2813",
        "InterviewEndDate": "2023-04-05 09:18:38",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "PMI"
    },
    {
        "InterviewId": "2814",
        "InterviewEndDate": "2023-04-05 09:18:07",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "PMI"
    },
    {
        "InterviewId": "2815",
        "InterviewEndDate": "2023-04-05 09:41:52",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2816",
        "InterviewEndDate": "2023-04-05 09:39:58",
        "InterviewState": "Complete",
        "Airline": "Klm",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2817",
        "InterviewEndDate": "2023-04-05 09:41:22",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2818",
        "InterviewEndDate": "2023-04-05 09:38:25",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2819",
        "InterviewEndDate": "2023-04-05 09:37:34",
        "InterviewState": "Complete",
        "Airline": "Klm",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2820",
        "InterviewEndDate": "2023-04-05 09:36:42",
        "InterviewState": "Complete",
        "Airline": "KL - KLM",
        "Dest": "AMS"
    },
    {
        "InterviewId": "2823",
        "InterviewEndDate": "2023-04-05 13:11:34",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "ALC"
    },
    {
        "InterviewId": "2824",
        "InterviewEndDate": "2023-04-05 13:09:47",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "ALC"
    },
    {
        "InterviewId": "2825",
        "InterviewEndDate": "2023-04-05 16:19:18",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "ALC"
    },
    {
        "InterviewId": "2829",
        "InterviewEndDate": "2023-04-05 19:15:50",
        "InterviewState": "Complete",
        "Airline": "DY - Norwegian Air Schuttle",
        "Dest": "OSL"
    },
    {
        "InterviewId": "2830",
        "InterviewEndDate": "2023-04-05 19:11:36",
        "InterviewState": "Complete",
        "Airline": "DY - Norwegian Air Schuttle",
        "Dest": "OSL"
    },
    {
        "InterviewId": "2832",
        "InterviewEndDate": "2023-04-05 19:10:42",
        "InterviewState": "Complete",
        "Airline": "DY - Norwegian Air Schuttle",
        "Dest": "OSL"
    },
    {
        "InterviewId": "2835",
        "InterviewEndDate": "2023-04-05 19:09:38",
        "InterviewState": "Complete",
        "Airline": "DY - Norwegian Air Schuttle",
        "Dest": "OSL"
    },
    {
        "InterviewId": "2836",
        "InterviewEndDate": "2023-04-05 19:10:05",
        "InterviewState": "Complete",
        "Airline": "DY - Norwegian Air Schuttle",
        "Dest": "OSL"
    },
    {
        "InterviewId": "2847",
        "InterviewEndDate": "2023-04-05 19:38:18",
        "InterviewState": "Complete",
        "Airline": "FR - Ryanair",
        "Dest": "KRK"
    }
]    

 `;