import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState=[
    todos=[{id:nanoid,text:'By default todo'}]
]

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid,text:action.payload.text
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
        UpdateTodo:(state,action)=>{
            let toUpdateTodo = state.todos.find((todo)=>todo.id===action.payload.id)
            if(toUpdateTodo){
                const updatedTodo={
                ...toUpdateTodo,
                text:action.payload.text
                }
            }

            const newTodo=state.todos.map((todo)=>
            todo.id===action.payload.id?updatedTodo:todo
            )
            state.todos=newTodo
        }
    }
})

export const {addtodo,deleteTodo,UpdateTodo} =todoSlice.action

export default todoSlice.reducer