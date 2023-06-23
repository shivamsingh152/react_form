import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//create action
export const createUser = createAsyncThunk('createUsers', async (data, {rejectWithValue}) =>{
    const response = await fetch('https://6493f3850da866a95366e797.mockapi.io/data',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
});

//read action
export const readUser = createAsyncThunk('readUsers', async (args, {rejectWithValue} ) => {
    const response = await fetch('https://6493f3850da866a95366e797.mockapi.io/data');
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//delete action
export const deleteUser = createAsyncThunk('deleteUsers', async (id, {rejectWithValue} ) => {
    const response = await fetch(`https://6493f3850da866a95366e797.mockapi.io/data/${id}`,
    { method : 'DELETE'});
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//update action
export const updateUser = createAsyncThunk('updateUsers', async (data, {rejectWithValue}) =>{
    const response = await fetch(`https://6493f3850da866a95366e797.mockapi.io/data/${data.id}`,
    {
        method : 'PUT',
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
});


export const userDetails = createSlice({
    name : 'userDetails',
    initialState : {
        users : [],
        loading : false,
        error : null,
},

extraReducers : {
//action
[createUser.pending] : (state) =>{
    state.loading = true;
},
[createUser.fulfilled] : (state,action) =>{
    state.loading = false;
    state.users.push(action.payload);
},
[createUser.rejected] : (state,action) =>{
    state.loading = false;
    state.error = action.payload.message;
},

//read
[readUser.pending] : (state) =>{
    state.loading = true;
},
[readUser.fulfilled] : (state,action) =>{
    state.loading = false;
    state.users = (action.payload);
},
[readUser.rejected] : (state,action) =>{
    state.loading = false;
    state.error = action.payload.message;
},

//delete user
[deleteUser.pending] : (state) =>{
    state.loading = true;
},
[deleteUser.fulfilled] : (state,action) =>{
    state.loading = false;

    const {id} = action.payload;
    if(id){
        state.users = state.users.filter((element)=> element.id !== id);
    }
},
[deleteUser.rejected] : (state,action) =>{
    state.loading = false;
    state.error = action.payload.message;
},

//update user
[updateUser.pending] : (state) =>{
    state.loading = true;
},
[updateUser.fulfilled] : (state,action) =>{
    state.loading = false;
    state.users = state.users.map((element) => 
        element.id === action.payload.id ? action.payload : element
    )
},
[updateUser.rejected] : (state,action) =>{
    state.loading = false;
    state.error = action.payload.message;
},
},
});

export default userDetails.reducer;