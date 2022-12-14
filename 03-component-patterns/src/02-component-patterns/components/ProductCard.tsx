import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ContextProductProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ContextProductProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons
        counter={counter}
        increaseBy={increaseBy}
      /> */}
      </div>
    </Provider>
  );
};
