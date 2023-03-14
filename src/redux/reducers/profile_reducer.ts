import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum Gender {
    Male,
    Female
}

export enum Activity {
    Extracurriculars,
    Honors
}

type Username = {
    name: string
    surname: string
}

type CountryOfResidence = {
    id: number
    name: string
}

type CityOfResidence = {
    id: number
    name: string
}

type ActivityType = {
    activity: Activity
    name: string
    description: string
}

type InitialState = {
    username: Username,
    gender: Gender,
    country_of_residence: CountryOfResidence | null,
    city_of_residence: CityOfResidence | null,
    activities: ActivityType[]
}

const initialActivity: ActivityType = {
    activity: Activity.Extracurriculars,
    name: '',
    description: '',
}

const initialState: InitialState = {
    username: {
        name: '',
        surname: '',
    },
    gender: Gender.Male,
    country_of_residence: null,
    city_of_residence: null,
    activities: [initialActivity]
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserName: (state, {payload}: PayloadAction<Username>) => {
            state.username = payload
        },
        setGender: (state, {payload}: PayloadAction<Gender>) => {
            state.gender = payload
        },
        setCountryOfResidence: (state, {payload}: PayloadAction<CountryOfResidence | null>) => {
            state.country_of_residence = payload
        },
        setCityOfResidence: (state, {payload}:PayloadAction<CityOfResidence | null>) => {
            state.city_of_residence = payload
        },
        setActivity: (state, {payload}: PayloadAction<{value: ActivityType, index: number}>) => {
            const {value, index} = payload
            state.activities[index] = value
        },
        addActivity: (state) => {
            state.activities.push(initialActivity)
        }
    }
})

export const {setUserName, setGender, setCountryOfResidence, setCityOfResidence, addActivity, setActivity} = profileSlice.actions
export default profileSlice.reducer


//selectors
export const selectUserName = (state: RootState) => state.profile.username
export const selectGender = (state: RootState) => state.profile.gender
export const selectCountryOfResidenceId = (state: RootState) => state.profile.country_of_residence
export const selectCityOfResidenceId = (state: RootState) => state.profile.city_of_residence
export const selectActivities = (state: RootState) => state.profile.activities