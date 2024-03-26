import React, { useEffect, useState } from 'react';

export const Main = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/S-keptic');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const [userRepos,setUserRepos] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://api.github.com/users/S-keptic/repos')
            const data = await response.json()
            setUserRepos(data)
        }
        fetchData()
    },[])






    return (
        <>
            <main className='bg-black pt-[54px] h-[100vh] font-mono text-white flex '>
                <div className='flex  py-4 px-4 mx-4 my-4 flex-col items-left mr-32 pt-16 border-r-2 border-white'>
                    <p className='text-4xl'>Sup, I am</p>
                    <h1 className='font-bold text-6xl cursor-pointer hover:text-purple-400'>Anmol Srivastava</h1>
                    <p className='text-base'>I'm a Fullstack Developer. Enjoys MERN stack and aspire to learn ML and Cloud.</p>
                    <p className='text-base'>When I'm not coding, I play games and listen to music.</p>
                    <div className='h-[75%] justify-center flex item item-center'>
                        <img className="h-full w-[280px]  rounded-full border-2 border-purple-600 mt-6 transition-transform duration-300 transform hover:scale-110 rounded-9xl" src="https://cdn.discordapp.com/attachments/1218248923450314892/1222155555330592829/image.png?ex=6615300e&is=6602bb0e&hm=89830e6f6f10b7ef57e31464666231e2f8c3e9024c6650bd492a440aa4824869&" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className='flex  py-4 px-4 mx-4 my-4 flex-col items-right  pt-32 justify-center'>
                    <div className=' flex border-2 border-white h-[250px] w-[500px] rounded-xl '>
                        {userData && (
                            <div className='flex space-x-4 '>
                                <img className='h-16 w-16 rounded-full' src={userData.avatar_url} alt="" />
                                <p>{userData.name}</p>
                                <p>{userData.location}</p>
                                <p>Number of public repos-- {userData.public_repos}</p>
             {/* <p>{userRepos[0].name}</p> */}
                            </div>
                            
                        )}
            


                    </div>
                </div>
            </main>
        </>
    );
};
