'use client';

import React from 'react';
import Text from '@/src/components/typographies/Text';
import * as style from './index.css';
import dayjs from 'dayjs';
import Button from '@/src/components/forms/Button';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import Table from '@/src/components/dataDisplay/Table';
import TableCell from '@/src/components/dataDisplay/Table/TableCell';
import TableHeader from '@/src/components/dataDisplay/Table/TableHeader';
import TableRow from '@/src/components/dataDisplay/Table/TableRow';
import TableBody from '@/src/components/dataDisplay/Table/TableBody';
import Modal from '@/src/components/overlays/Modal';

export default function CounselingReservationPage() {
  return (
    <main className={style.container}>
      <h1 className={style.title}>
        <Text type="heading3_700" color={'GRAY_90'}>
          예약대기
        </Text>
      </h1>
      <Table>
        <TableHeader>
          <TableCell width={160} align="left">
            <Text type="caption1_600" color={'GRAY_70'}>
              신청일시
            </Text>
          </TableCell>
          <TableCell width={160}>
            <Text type="caption1_600" color={'GRAY_70'}>
              상품정보
            </Text>
          </TableCell>
          <TableCell width={160}>
            <Text type="caption1_600" color={'GRAY_70'}>
              내담자명
            </Text>
          </TableCell>
          <TableCell width={184}>
            <Text type="caption1_600" color={'GRAY_70'}>
              회차
            </Text>
          </TableCell>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((item) => (
            <TableRow>
              <TableCell width={160} align="left">
                <Text type="body2_500" color={'GRAY_80'}>
                  {dayjs().format('YYYY.MM.DD HH:mm')}
                </Text>
              </TableCell>
              <TableCell width={160}>
                <Text type="body2_500" color={'GRAY_80'}>
                  50분 화상 상담
                </Text>
              </TableCell>
              <TableCell width={160}>
                <Text type="body2_500" color={'GRAY_80'}>
                  {true ? (
                    <FemaleIcon width={22} height={22} />
                  ) : (
                    <MaleIcon width={22} height={22} />
                  )}
                  박마음
                </Text>
              </TableCell>
              <TableCell width={184}>
                <div className={style.buttonContainer}>
                  <Text type="body2_500" color={'GRAY_80'}>
                    {4}회차
                  </Text>
                  <Button styleType="primarySmooth" size="small">
                    예약확정
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal.WithButton
        isVisible={true}
        size="medium"
        variant="basic"
        title="예약 일정"
        cancelButton={
          <Button styleType="secondarySmooth" size="small">
            닫기
          </Button>
        }
        confirmButton={
          <Button styleType="primarySolid" size="small">
            확정하기
          </Button>
        }
        isPartialDim={true}
        closeModalHandler={() => {}}
        contentChildren={
          <div>
            <Text type="heading5_600" color={'GRAY_90'}>
              {true ? <FemaleIcon /> : <MaleIcon />}
              박마음 (30대)
            </Text>
            <Text type="body1_500" color={'GRAY_80'}>
              날짜
            </Text>

            <Text type="body1_500" color={'GRAY_80'}>
              시간
            </Text>
          </div>
        }
      ></Modal.WithButton>
    </main>
  );
}
