import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {

	return (
		<Layout home>
			<Head>
				<title>About</title>
			</Head>
			<h1>About</h1>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		redirect: {
      destination: '/',
      permanent: ture, // triggers 308
    },
	}
}