import { Link } from "react-router-dom"


function CaseCard({data, index}){
    return(
        <Link
            to="/cases/id"

            onMouseEnter={()=>{
                const title_element = document.getElementById(index);
                title_element.classList.add("text-orange-button");
                console.log(title_element);
                const img = document.getElementById(data.id);
                img.classList.add("object-scale-down");
                console.log(img);

                
            }}

            onMouseLeave={()=>{
                const title_element = document.getElementById(index);
                title_element.classList.remove('text-orange-button');
                const img = document.getElementById(data.id);
                img.classList.remove("object-scale-down");
            }}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg ">
                <div className="flex-shrink-0">
                  <img id={data.id} className="h-96 w-full object-cover transition duration-300 ease-in-out" src={data.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xl font-medium text-gray-800">
                      <a href={data.category.href} className="hover:underline">
                        {data.category.name}
                      </a>
                    </p>
                    <a href={data.href} className="mt-2 block">
                      <p id={index} className="xl:text-4xl text-2xl pb-6 font-semibold transition duration-300 ease-in-out text-gray-900">{data.title}</p>
                      <p className="mt-3 leading-9 text-xl text-gray-500">{data.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    
                  </div>
                </div>
              </Link>
    )
}

export default CaseCard;