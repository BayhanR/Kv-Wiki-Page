"use server"

import axios from "axios";

export async function GET(request: Request) {
    const res = await axios.get("https://api.themoviedb.org/3/tv/34587/credits?api_key=3b3b9c816ffa9292cbfb27de2b1ffe58")
  
    return Response.json({
      cast: res.data.cast,
    });
}