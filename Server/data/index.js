import mongoose from "mongoose";


export const voters= [
    {
        firstName : "Allan",
        lastName: "Mcleod",
        dpi: "9516780879916",
        birthdate: "1993-05-21T04:05:12.876Z",
        registered: true,
        table: "646ecdb2e19804579783523c"
    },
    {
        firstName : "Lea",
        lastName: "Howard",
        dpi: "6575328802899",
        birthdate: "1982-06-14T04:05:12.876Z",
        registered: true,
        table: "646ecdb2e19804579783523c"
    },
    {
        firstName : "Louisa",
        lastName: "Murray",
        dpi: "8720395825299",
        birthdate: "1983-07-14T04:05:12.876Z",
        registered: true,
        table: "646ecdb2e19804579783523c"
    },
    {
        firstName : "Barbara",
        lastName: "Wilson",
        dpi: "1199912516998",
        birthdate: "1981-11-04T04:05:12.876Z",
        registered: true,
        table: "646fb50110e940e8677f3671"
    },
    {
        firstName : "Alexandria",
        lastName: "Parker",
        dpi: "7409231621705",
        birthdate: "1992-11-10T04:05:12.876Z",
        registered: true,
        table: "646fb50110e940e8677f3671"
    },
    {
        firstName : "Leona",
        lastName: "Fletcher",
        dpi: "8617536013213",
        birthdate: "1990-01-05T04:05:12.876Z",
        registered: true,
        table: "646fb50110e940e8677f3671"
    },
    {
        firstName : "Elissa",
        lastName: "Hughes",
        dpi: "2655834772230",
        birthdate: "1991-01-06T04:05:12.876Z",
        registered: true,
        table: "646fb5aa10e940e8677f367a"
    },
    {
        firstName : "Shivam",
        lastName: "Hutchinson",
        dpi: "7314987657365",
        birthdate: "1984-03-07T04:05:12.876Z",
        registered: true,
        table: "646fb5aa10e940e8677f367a"
    },
    {
        firstName : "Abdirahman",
        lastName: "Clark",
        dpi: "3844451658823",
        birthdate: "1986-12-10T04:05:12.876Z",
        registered: true,
        table: "646fb5aa10e940e8677f367a"
    }
]

export const votes = [
    //President
    {
        voter: "646fbc3fd77305eee08cd420",
        candidate: "646e93b8db23e07449cf7b6c",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd421",
        candidate: "646e93b8db23e07449cf7b6c",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd422",
        candidate: "646e93b8db23e07449cf7b6c",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd423",
        candidate: "646e93b8db23e07449cf7b6c",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd424",
        candidate: "646fae0610e940e8677f3661",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd425",
        candidate: "646fae0610e940e8677f3661",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd426",
        candidate: "646fae0610e940e8677f3661",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd427",
        candidate: "646fae0610e940e8677f3661",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd428",
        candidate: "646fae0610e940e8677f3661",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    //Mayor
    {
        voter: "646fbc3fd77305eee08cd420",
        candidate: "646fbe5b10e940e8677f368a",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd421",
        candidate: "646fbe5b10e940e8677f368a",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd422",
        candidate: "646fbe5b10e940e8677f368a",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd423",
        candidate: "646fbe5b10e940e8677f368a",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd424",
        candidate: "646fbe5b10e940e8677f368a",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd425",
        candidate: "646fbe9810e940e8677f368b",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd426",
        candidate: "646fbe9810e940e8677f368b",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd427",
        candidate: "646fbe9810e940e8677f368b",
        date: "2023-05-25T04:05:12.876+00:00"
    },
    {
        voter: "646fbc3fd77305eee08cd428",
        candidate: "646fbe9810e940e8677f368b",
        date: "2023-05-25T04:05:12.876+00:00"
    },
]