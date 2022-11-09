import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../components/Menu";
import { StyledTimeline } from "../components/Timeline";
import { StyledFavorites } from "../components/Favorites";

function HomePage() {
    const estilosDaHomePage = {

    };

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>

                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}
export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    
    background-color: ${({ theme }) => theme.backgroundLevel1};

    #foto-profile {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    #foto-banner {
        width: 100%;
        height: 230px;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <img src={'https://i.imgur.com/bKfgHMU.png'} alt="imagem do banner" id="foto-banner" />
            <section className="user-info">
                <a href="https://www.linkedin.com/in/gabriel-seiji-sim%C3%B5es-kanda-3191205b/">
                    <img src={`https://github.com/${config.github}.png`} alt="foto perfil" id="foto-profile" />
                </a>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}) {

    const playlistName = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => {
                const videos = props.playlists[playlistName];
                
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                        {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Favorites(props) {
    const favoritesList = Object.keys(props.favorites);
    //  console.log("Dentro do componente", props.favorites);
    return (
        <StyledFavorites>
            {favoritesList.map((favorite) => {
                const channels = props.favorites[favorite]
                return (
                    <section key={favorite}>
                        <h2>{favorite}</h2>
                        <div>
                            {channels.map((channel) => {
                                return (
                                    <a key={channel.url} href={channel.url}>
                                        <img src={channel.img} />
                                        <span>
                                            {channel.user}
                                        </span>
                                    </a>
                                )
                            })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    );
}