import React from "react";
import './YoutubePlayer.style.css'

type YoutubePlayerProps = {
    id: string
}

type YoutubePlayerState = {
    player: YT.Player
}

class YouTubeVideo extends React.Component<YoutubePlayerProps, YoutubePlayerState> {


    componentDidMount = () => {
        // On mount, check to see if the API script is already loaded

        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // onYouTubeIframeAPIReady will load the video after the script is loaded
            // @ts-ignore
            window.onYouTubeIframeAPIReady = this.loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            // @ts-ignore
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        } else { // If script is already there, load the video directly
            this.loadVideo();
        }
    };

    loadVideo = () => {
        const { id } = this.props;

        // the Player object is created uniquely based on the id in props
        this.setState({player: new window.YT.Player(`youtube-player-${id}`, {
                videoId: id,
                events: {
                    onReady: this.onPlayerReady,
                },
            })})
    };

    onPlayerReady = (event: YT.PlayerEvent) => {
        console.log("video is ready");
        //event.target.playVideo();
    };

    render = () => {
        const { id } = this.props;
        return (
            <div className={"youtube-player-root"}>
                <div id={`youtube-player-${id}`}/>
            </div>
        );
    };
}

export default YouTubeVideo;