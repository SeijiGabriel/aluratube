import { createClient } from "@supabase/supabase-js";



const PROJECT_URL = "https://nnhwoecyovflrtifdxkd.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uaHdvZWN5b3ZmbHJ0aWZkeGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODcxNTksImV4cCI6MTk4Mzc2MzE1OX0.SPwSQBbOLqcHhxSX5kSk8fYd7B2AuZFmsnR4c55dZIs";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
                
        }
    }
}