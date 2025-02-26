import { DateHelper } from "@/utils/date";

type QuestionCounterData = {
  count: number;
  updatedAt: Date;
};

const QUESTION_COUNTER = "questionCounter";
export const QUESTION_COUNTER_LIMIT = 10;

export class QuestionCounter {
  static init(): void {
    const { updatedAt } = QuestionCounter.get();
    const today = new Date();

    if (!DateHelper.isSameDay(updatedAt, today)) {
      QuestionCounter.reset();
    }
  }

  static reset(): void {
    const counter: QuestionCounterData = { count: 0, updatedAt: new Date() };
    localStorage.setItem(QUESTION_COUNTER, JSON.stringify(counter));
  }

  static get(): QuestionCounterData {
    let counter = localStorage.getItem(QUESTION_COUNTER);

    if (counter === null) {
      QuestionCounter.reset();
      counter = localStorage.getItem(QUESTION_COUNTER)!;
    }

    const counterData = JSON.parse(counter);
    counterData.updatedAt = new Date(counterData.updatedAt);
    return counterData;
  }

  static isIncrementable(): boolean {
    const counter = QuestionCounter.get();
    return counter.count < QUESTION_COUNTER_LIMIT;
  }

  static increment(): void {
    if (!QuestionCounter.isIncrementable()) return;

    const counter = QuestionCounter.get();
    const updatedCounter: QuestionCounter = {
      count: counter.count + 1,
      updatedAt: new Date(),
    };
    localStorage.setItem(QUESTION_COUNTER, JSON.stringify(updatedCounter));
  }
}
