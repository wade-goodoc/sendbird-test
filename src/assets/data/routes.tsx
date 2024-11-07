import CounselingReservationIcon from '@/src/assets/icons/ic_counseling_reservation.svg';
import CounselingWaitIcon from '@/src/assets/icons/ic_counseling_wait.svg';
import CounselingListIcon from '@/src/assets/icons/ic_counseling_list.svg';

import OperationProfileIcon from '@/src/assets/icons/ic_operation_profile.svg';
import OperationProductIcon from '@/src/assets/icons/ic_operation_product.svg';
import OperationSchedule from '@/src/assets/icons/ic_operation_schedule.svg';
import { COLORS } from '@/src/styles/colors';

export const Routes = [
  {
    id: '',
    name: '상담관리',
    path: '/counseling',
    grant: '',
    depth: 0,
    children: [
      {
        id: '',
        name: '예약대기',
        path: '/counseling/reservation',
        icon: <CounselingReservationIcon width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: ''
      },
      {
        id: '',
        name: '상담대기',
        path: '/counseling/wait',
        icon: <CounselingWaitIcon width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: ''
      },
      {
        id: '',
        name: '상담내역',
        path: '/counseling/list',
        icon: <CounselingListIcon width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: ''
      }
    ]
  },
  {
    id: '',
    name: '고객관리',
    path: '/customer',
    icon: '',
    grant: '',
    depth: 0,
    children: [
      {
        id: '',
        name: '리뷰 관리',
        path: '/customer/review',
        icon: <CounselingReservationIcon width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: ''
      }
    ]
  },
  {
    id: '',
    name: '운영관리',
    path: '/operation',
    icon: '',
    grant: '',
    depth: 0,
    children: [
      {
        id: '',
        name: '프로필 관리',
        path: '/operation/profile',
        icon: <OperationProfileIcon width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: ''
      },
      {
        id: '',
        name: '상품 관리',
        path: '/operation/product',
        icon: <OperationProductIcon width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: ''
      },
      {
        id: '',
        name: '일정 관리',
        path: '/operation/schedule',
        icon: <OperationSchedule width={24} height={24} color={COLORS.GRAY_60} />,
        grant: '',
        depth: 1,
        parentId: 'operation'
      }
    ]
  }
];
