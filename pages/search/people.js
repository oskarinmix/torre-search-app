import React from "react";
import Axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";
import CardUser from "./../../components/CardUser";
import "../../styles/search.scss";
const SearchPeople = () => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState(null);
  const [pagSize, setPagSize] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const getResults = async () => {
    const query = { name: { term: search } };
    try {
      const resp = await Axios.post(
        ` https://search.torre.co/people/_search/?size=${pagSize}&offset=${
          pagSize * page
        }`,
        query
      );
      console.log(resp.data.results);
      setResults(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (page !== 0) {
      console.log("Changing Page");
      getResults(page);
    }
  }, [page]);
  React.useEffect(() => {
    setPage(0);
    setResults(null);
  }, [search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getResults();
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search People"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setPagSize(e.target.value)} value={pagSize}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <button type="submit" disabled={search.length === 0}>
          Search
        </button>
      </form>

      {results && (
        <React.Fragment>
          {results.results.map((result) => (
            <Link href={`/profile/${result.username}`} key={result.subjectId}>
              <a>
                <CardUser
                  img={result.picture}
                  name={result.name}
                  username={result.username}
                />
              </a>
            </Link>
          ))}

          <button onClick={() => (page > 0 ? setPage(page - 1) : 0)}>
            prev
          </button>
          <button onClick={() => setPage(page + 1)}>next</button>
          {page}
          <h1>
            Mostrando {results.size * (page + 1)} de {results.total} resultados
          </h1>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default SearchPeople;
