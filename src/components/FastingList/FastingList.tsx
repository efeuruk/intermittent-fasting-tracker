import { useFastingContext } from "../../context/hooks/useFastingContext";
import FastingListItem from "../FastingListItem/FastingListItem";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

type FastingListProps = {
  title: string;
  showViewAll?: boolean;
};

const FastingList: React.FC<FastingListProps> = ({
  title,
  showViewAll = true,
}) => {
  const { fastingList } = useFastingContext();

  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/view-all");
  };

  return (
    fastingList.length > 0 && (
      <S.Container>
        <S.TitleContainer>
          <S.Title component={"h4"}>{title}</S.Title>
          {showViewAll && (
            <S.ViewButton onClick={handleViewAllClick}>View All</S.ViewButton>
          )}
        </S.TitleContainer>
        <S.FastingListContainer>
          {fastingList.map(fasting => (
            <FastingListItem
              key={fasting.date.toISOString()}
              fasting={fasting}
            />
          ))}
        </S.FastingListContainer>
      </S.Container>
    )
  );
};

export default FastingList;
