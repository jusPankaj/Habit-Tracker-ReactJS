import { createSlice } from "@reduxjs/toolkit";


export const details = [
    { day: 'MON', status: 'none'},
    { day: 'TUE', status: 'none'},
    { day: 'WED', status: 'none'},
    { day: 'THU', status: 'none'},
    { day: 'FRI', status: 'none'},
    { day: 'SAT', status: 'none'},
    { day: 'SUN', status: 'none'},
]


//loading habits from localStrage
const habitsLocalStorage = localStorage.getItem('newHabits') ? JSON.parse(localStorage.getItem('newHabits')) : [{ title: 'Running', description : 'run 5 miles daily', details}]

let habits = [...habitsLocalStorage];

const initialState = {
    habits: habits,
}


// creating reducers and actions using redux tool kit

const habitsSlice = createSlice({
    name:'habits',
    initialState,
    reducers: {
        addHabit: (state, {payload}) => {
            state.habits = [...state.habits, payload]
            habits = [...habits, payload]
            window.localStorage.setItem('newHabits', JSON.stringify(habits))
        },
        deleteHabit: (state, action) => {
            state.habits = state.habits.filter((habit)=> habit.title != action.payload)
            window.localStorage.setItem('newHabits', JSON.stringify(state.habits))
        },
        changeStatus: (state, { payload }) => {
            state.habits.forEach((habit) => {
                if(habit.title === payload.title) {
                    habit.details.forEach((detail) => {
                        if(detail.day === payload.details[0].day) {
                            detail.status = payload.details[0].status
                        }
                    })
                }
            })
            window.localStorage.setItem('newHabits', JSON.stringify(state.habits))
        }

    }
})

console.log(habitsSlice);

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions

export default habitsSlice.reducer