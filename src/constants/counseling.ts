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
