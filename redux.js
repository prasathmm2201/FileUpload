const counterSlice = createStore({
    name:"count",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count+=1
        }
    }
})
export const {increment} = slice.actions
export default slice.reducer;

export const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"/api"}),
    endpoints:(builder)=>({
        getPosts:builder.query({
            query:(id)=>"getPosts/{id}"
        })
    })
})
export const {useGetPostsQuery} = api

const custom =(store)=>(nexr)=>(action)=>{
    return nexr(action)

}
const stores = createStore({
    reducer:{
        counter:counterReducer
    },
    middelware:(getDef)=>{
        getDef().concat(api.middelware , custom)
    }
})

const state=useSelector((state)=>state.counter.count)
