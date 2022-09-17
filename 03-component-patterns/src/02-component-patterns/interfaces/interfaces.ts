import { ReactElement, CSSProperties } from 'react';

import { ProductTitleProps, ProductImageProps, Props as ProductButtonProps } from '../components';

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
}

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ContextProductProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}
