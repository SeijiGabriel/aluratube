import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";
import { videoService} from "../src/services/videoService";

function HomePage() {

    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                // Forma imutavel
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                })

                setPlaylists(novasPlaylists);
            });
    }, []);


    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>

                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}>
                    Conteúdo
                </Timeline>
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}
export default HomePage;

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
            <img src={'https://i.imgur.com/Mfv3Tf6.png'} alt="imagem do banner" id="foto-banner" />
            <section className="user-info">
                <a href="https://github.com/SeijiGabriel/">
                    <img src={`data:image/jpeg;base64,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`} alt="foto perfil" id="foto-profile" />
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

function Timeline({ searchValue, ...props }) {

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