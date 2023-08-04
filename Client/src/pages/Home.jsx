import { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";


const RenderCards = ({data, title})=>{
    if(data?.length >0){
        return data.map((post)=>
<Card key={post._id}{...post}/>
        )
    }
    return (
        <h1 className="mt-5 font-bold text-[#6449ff] uppercase text-xl">{title}</h1>
    )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText, setSearchText]= useState("");
  return (
    <div>
      <section className="max-w-7xl x-auto">
        <div>
        <h1 className="font-extrabold text-[#223328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
Browse through a collection of imaginative and visually stunning images generated by DALL-E AI
        </p>
        </div>

        <div className="mt-6">
            <FormField/>
        </div>
        <div className="mt-10">
        {loading ? (
        <div className="flex justify-center items-center">
                <Loader/>
                </div>
            ):(
                <>
                {searchText && (
                    <h2 className="font-medium text-xl mb-3 text-[#666e75]">
                        Showing Result <span className="text-[#222376]">{searchText}</span>
                    </h2>
                )}

                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                  {searchText ? (
                    <RenderCards 
                    data={[]}
                    title="No Search Found"
                    />
                  ) : (
                    <RenderCards
                    data={[]}
                    title="No Post Found"
                    />
                  ) }
                </div>
                </>
            )
            }
        </div>
      </section>
    </div>
  );
};

export default Home;