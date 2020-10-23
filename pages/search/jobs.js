import React from "react";
import Axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";

const SearchOpportunities = (props) => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState(null);
  const [page, setPage] = React.useState(0);

  const getResults = async (page) => {
    const query = {
      "skill/role": { text: search, experience: "potential-to-develop" },
    };
    try {
      const resp = await Axios.post(
        `https://search.torre.co/opportunities/_search/?aggregate=true&size=10&offset=${
          page * 10
        }`,
        query
      );
      console.log(resp.data.results);
      setResults(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getResults(page);
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
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for opportunities"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit"> Search</button>
      </form>

      {results && (
        <React.Fragment>
          <ul>
            {results.results.map((result) => (
              <li key={result.id}>
                <Link href={`/opportunities/${result.id}`}>
                  <a>{result.objective}</a>
                </Link>
              </li>
            ))}
          </ul>
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

export default SearchOpportunities;
