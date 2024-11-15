import {
  CounselingTopicEnum,
  SpecialtyEnum,
  TherapySessionStyleEnum
} from '@/src/gql/generated/graphql';

export const COUNSELING_SPECIALTY = {
  [SpecialtyEnum.EnglishCommunication]: '영어 소통 가능',
  [SpecialtyEnum.LateNightCounseling]: '야간 상담',
  [SpecialtyEnum.LgbtFriendly]: '성소수자 친화적 상담',
  [SpecialtyEnum.SexualIssuesCounseling]: '성문제 관련 상담'
};

export const COUNSELING_STYLE = {
  [TherapySessionStyleEnum.EmpathyAndComfort]: '공감과 위로',
  [TherapySessionStyleEnum.SpecializedAnalysis]: '전문적인 분석',
  [TherapySessionStyleEnum.PracticalAdvice]: '현실적인 조언'
};

export const COUNSELING_TOPIC = {
  [CounselingTopicEnum.ChildcareAndParenting]: '자녀 및 육아',
  [CounselingTopicEnum.DepressionAndAnxiety]: '우울 및 불안',
  [CounselingTopicEnum.FamilyConflict]: '가족 갈등',
  [CounselingTopicEnum.InterpersonalAndCommunication]: '대인관계 및 소통',
  [CounselingTopicEnum.PersonalityAndBehavior]: '성격 및 행동',
  [CounselingTopicEnum.RelationshipAndMarriage]: '연애 및 부부',
  [CounselingTopicEnum.WorkAndCareer]: '직장 및 진로'
};

export const CANCEL_REASONS = [
  { value: '1', label: '내담자 무응답/연락두절' },
  { value: '2', label: '일정 조율이 어려움' },
  { value: '3', label: '내담자의 부적절한 언행' },
  { value: '4', label: '내담자의 취소 요청' },
  { value: '5', label: '상담사의 불가피한 사유' },
  { value: '6', label: '서비스/네트워크 문제 발생' },
  { value: '7', label: '직접 입력' }
];
