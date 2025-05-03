import { findAllStreamers } from "../lib/repositories/streamers";
import Streamers from "./Streamers";

const StreamersPage = async () => {
	const streamers = await findAllStreamers();
	return <Streamers init={streamers} />;
};

export default StreamersPage;
