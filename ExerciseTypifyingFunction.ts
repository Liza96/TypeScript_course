/* Блок3_3.11
Код к лекции:

Запрос:
{
   "topicId": 5,
   "status": "published" // "draft", "deleted"
}
Ответ:
[
   {
      "question": "Как осуществляется доставка?",
      "answer": "быстро!",
      "tags": [
         "popular",
         "new"
      ],
      "likes": 3,
      "status": "published"
   }
]
Функция:
async function getFaqs(req) {
   const res = await fetch('/faqs', {
      method: 'POST',
      body: JSON.stringify(req)
   });
   const data = await res.json();
   return data;
}*/

enum QuestionStatus {
    Published = "published",
    Draft = "draft",
    Deleted = "deleted",
}

async function getFaqs(req: {
    topicTD: number;
    status?:  QuestionStatus;
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
}[]> {
    const res = await fetch ('/faqs', {
        method: "POST",
        body: JSON.stringify(req)
    });
    const data = await res.json();
}