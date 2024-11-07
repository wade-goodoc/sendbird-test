import { COLORS } from '@/src/styles/colors';
import { recipe } from '@vanilla-extract/recipes';

export const checkedButton = recipe({
  variants: {
    checked: {
      // secondaryOutline 버튼 기준으로만 checked 상태일떄 스타일 추가
      // 추후 필요시 각각의 styleType에 따라 checked 스타일 추가 생성될 수 있음
      true: `border: 1px solid ${COLORS.GRAY_80}`
    }
  }
});
