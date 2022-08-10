import styled from "styled-components";
import { Container } from "../styles/utils";

interface Product {
  name: string;
}

interface ProductsProps {
  products: any[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductContainer>
      <Title>
        <span>De</span>staques
      </Title>
      <ProductList>
        <ProductItem>a</ProductItem>
        <ProductItem>b</ProductItem>
        <ProductItem>c</ProductItem>
        <ProductItem>d</ProductItem>
        <ProductItem>e</ProductItem>
        <ProductItem>f</ProductItem>
        <ProductItem>g</ProductItem>
      </ProductList>
    </ProductContainer>
  );
};

const ProductContainer = styled.section`
  ${Container};
`;

const Title = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 3.125rem;
  margin-bottom: 2.8rem;
  span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;
  margin-bottom: 11.25rem;
`;

const ProductItem = styled.div`
  height: 23.125rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 5px 0px 10px #d9d9d9;
  padding: 1rem;
`;

const ProductName = styled.p`
    font-size: 0.875rem;
`;

const ProductPrice = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
`;

const ProductSplitPrice = styled.small`
`;

export default Products;
