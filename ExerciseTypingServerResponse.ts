/* Блок4_4.8
Код к упражнению:

Запрос в виде платежа
{
   "sum": 10000,
   "from": 2,
   "to": 4
}
Возможные ответы:
{
   "status": "success",
   "data": {
      "databaseId": 567,
      "sum": 10000,
      "from": 2,
      "to": 4
   }
},
{
   "status": "failed",
   "data": {
      "errorMessage": "Недостаточно средств",
      "errorCode": 4
   }
}
*/

interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

//ExerciseMakingTypeguardAnswer Блок4_4.15

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSuccess(res: Res): res is IResponseSuccess {
    if (res.status === PaymentStatus.Success) {
        return true;
    }
    return false;
}

function getIdFromData(res: Res): number {
    if (res.status === PaymentStatus.Success) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}