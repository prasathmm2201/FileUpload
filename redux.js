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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const counterSlice = createSlice({
    name:"count",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count+=1
        }
    }
})
export const {increment} = slice.actions
// export default slice.reducer;

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


const slice1 = createSlice({
    name:"home",
    initialState:{counter:0},
    reducer:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count+=0
        }
    }
})
export default slice1
const store = configureStore({
    reducer:{
        counter:slice1.reducer,
        [api.reducerPath]:api.reducer,
    },
    middelware:(getDefaultMiddleware)=>{
        getDefaultMiddleware().concat(getApis)
    }
})

const api = createApi({
    reducerPath:"homeApi",
    baseQuery:fetchBaseQuery({baseUrl:"/api"}),
    endpoints:(builder)=>({
        getPosts:builder.query({
            query:()=>'posts'
        }),
        add:builder.mutation({
            query:(newPosts)=>({
                url:'post',
                me
            })
        })
    })
})
{/* <Provider store={store}></Provider> */}



descripe("Render a counter component",()=>{
    test("get a intial of count",()=>{
        render(<Conter/>)
        const count = screen.getByTestId('counter')
        const button = screen.getByTestId('get-counter')
        fireEvent.click(button)
        expact(count).toHaveTextContent("0")
        expact(sum(1,2)).toBe(2)
    })
})
