export interface IProps {
  currentPage: number;
  totalPages: number;
  step?: number;
}

export interface IStyledProps {
  currentPage?: number;
  page?: number;
  step?: number;
}

export interface IStyledBtnProps {
  isActive?: boolean;
}
