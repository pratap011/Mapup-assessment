import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

/*The entire info of the countries including lat,long, currency, etc are stored in this object and it is used to populate the state of redux.
The data is taken from here and used to render maps and the Card containing all the details about the country */
 const geoInfo={
     "India":{
         location:{lat:20.5937, lng:78.9629},
         zoom:5,
         currency:"INR",
         speedUnit:"Kilometers Per Hour",
         distance:"Kilometers",
         volume:"Litres"
     },
     "United States":{
         location:{lat:45.2565,lng:-95.9345},
         zoom:4,
         currency:"USD",
         speedUnit:"Miles Per Hour",
         distance:"Miles",
         volume:"US Gal"
     },
     "United Kingdom":{
         location:{lat:55.3781,lng:3.4360},
         zoom:6,
         currency:"EUR",
         speedUnit:"Kilometers Per Hour",
         distance:"Kilometers",
         volume:"Imp Gal"
     }
 }
export const counterSlice = createSlice({
    //The default state and name of the slice. As you can see the initial state is in India and all of it's details are present.
  name: 'changeLocation',
  initialState:{
      name:"India",
      location:{lat:20.5937, lng:78.9629},
      zoom:5,
      currency:"INR",
        speedUnit:"Kilometers Per Hour",
         distance:"Kilometers",
         volume:"Litres"
  },
  reducers: {
      /* The reducer function which takes in state and action. The action being the input (US, UK, India) that the users chooses
    Here once the user chooses a country, the inital state is changed to all the details of the country that the user chose. */
   
    changeLocation: (state, action) => {
        state.name=action.payload
        state.location=geoInfo[action.payload].location
        state.zoom=geoInfo[action.payload].zoom
        state.currency=geoInfo[action.payload].currency
        state.speedUnit=geoInfo[action.payload].speedUnit
        state.distance=geoInfo[action.payload].distance
        state.volume=geoInfo[action.payload].volume

      
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLocation } = counterSlice.actions

export default counterSlice.reducer