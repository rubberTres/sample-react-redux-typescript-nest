import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchSingleStreamer, voteSingleStreamer } from "store/features/singleStreamerReducer";
import Loader from "components/Loader";
import { isNotNull } from "types/typeguards";
import Button, { ButtonColor } from "components/Button";
import { Vote } from "types/streamer.types";
import classNames from "classnames";

function SingleStreamerScreen() {

	const navigate = useNavigate();

	const [ isDropdownOpen, toggleDropdownOpen ] = useState(false);

	const dispatch = useAppDispatch();

	const { singleStreamer } = useAppSelector(state => state);

	const { streamerId } = useParams();

	useEffect(() => {
		dispatch(fetchSingleStreamer(streamerId ?? ""));
	}, []);

	const handleVote = (vote: Vote) => {
		dispatch(voteSingleStreamer({ streamerId: streamerId ?? "", vote }));
	};

	return (
		<div className="single-streamer">
			<Button
				className="single-streamer__back-button"
				color={ ButtonColor.PRIMARY }
				onClick={ () => navigate("/") }
			>
				Back to Streamers list
			</Button>
			{ singleStreamer.loading && <Loader/> }
			{ singleStreamer.error && <div>Error fetching Streamer</div> }
			{
				isNotNull(singleStreamer.data)
				&&
                <div className="single-streamer__content">
                    <div className="single-streamer__name">
						{ singleStreamer.data.name }
                    </div>
                    <img
                        className="single-streamer__image"
                        src={ require("../assets/streamer.png") }
                        alt="streamer-image"
                    />
                    <div className="single-streamer__item">
                        description: { singleStreamer.data.description }
                    </div>
                    <div className="single-streamer__item">
                        platform: { singleStreamer.data.platform }
                    </div>
                    <div className="single-streamer__item">
                        up votes: { singleStreamer.data.upVotes }
                    </div>
                    <div className="single-streamer__item">
                        down votes: { singleStreamer.data.downVotes }
                    </div>
                    <div className="single-streamer__dropdown">
                        <Button
                            color={ ButtonColor.PRIMARY }
                            loading={ singleStreamer.isVoting }
							onClick={ () => toggleDropdownOpen(isOpen => !isOpen) }
                        >
							{ `Vote for ${ singleStreamer.data.name }` }
                        </Button>
                        <div className={
							classNames(
								"single-streamer__dropdown-body",
								{ "single-streamer__dropdown-body--open": isDropdownOpen },
							)
						}>
                            <Button
                                color={ ButtonColor.SUCCESS }
                                onClick={ () => {
									handleVote(Vote.UP);
									toggleDropdownOpen(isOpen => !isOpen);
								} }
                            >
                                Vote UP
                            </Button>
                            <Button
                                color={ ButtonColor.DANGER }
                                onClick={ () => {
									handleVote(Vote.DOWN);
									toggleDropdownOpen(isOpen => !isOpen);
								} }
                            >
                                Vote DOWN
                            </Button>
                        </div>
                    </div>
                </div>
			}
		</div>
	);
}

export default SingleStreamerScreen;