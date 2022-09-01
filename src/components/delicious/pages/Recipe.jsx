import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params['*']}/information?apiKey=24fde87673834c3d85b7ed17b36a3b75`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params['*']]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}>
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}>
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map(ingredient => (
              <li key={ingredient.id + ingredient.name}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .active{
    background: linear-gradient(to right, #f27121, #e94057);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  h3{
    font-size: 1rem;
    font-weight: 300;
  }
  ol{
    margin-top: 2rem;
  }
  li{
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.7rem;
    list-style: disc;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  background: linear-gradient(35deg, #494949, #313131);
  border: 2px solid #000;
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipe
