import React from 'react';
import Search from '../components/Search';
import './SearchPage.css';
import { useStateValue } from '../components/StateProvider';
import { Link } from "react-router-dom";
import useGoogleSearch from '../components/useGoogleSearch';
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
	const [{ term }, dispatch] = useStateValue();

	const { data } = useGoogleSearch(term);
	console.log(data);

	return (
		<div className='searchPage'>
			<div className="srchpg-header">
				<div className="searchPage__headerBody">
					<Search />
					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="searchPage__option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="searchPage__option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="searchPage__option">
								<LocalOfferIcon />
								<Link to="/shopping">shopping</Link>
							</div>
							<div className="searchPage__option">
								<RoomIcon />
								<Link to="/maps">maps</Link>
							</div>
							<div className="searchPage__option">
								<MoreVertIcon />
								<Link to="/more">more</Link>
							</div>
						</div>
						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="srchpg-results">

			</div>
		</div>
	);
}

export default SearchPage;