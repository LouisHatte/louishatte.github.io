import { z } from "zod";

import { DateHelper } from "@/utils/date";

type QuestionCounterData = {
  count: number;
  updatedAt: Date;
};

const QUESTION_COUNTER = "questionCounter";
export const QUESTION_COUNTER_LIMIT = 10;

const questionCounterSchema = z.object({
  count: z.number().int().min(0).max(10),
  updatedAt: z
    .string()
    .refine((date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    })
    .refine((date) => {
      return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(date);
    }),
});

export class QuestionCounter {
  static init() {
    QuestionCounter._sanitizeValue();
  }

  private static _sanitizeValue() {
    const rawCounter = localStorage.getItem(QUESTION_COUNTER);
    if (rawCounter === null) {
      return QuestionCounter.reset();
    }

    let counter;
    try {
      counter = JSON.parse(rawCounter);
      questionCounterSchema.parse(counter);
    } catch (error) {
      return QuestionCounter.reset();
    }

    const today = new Date();
    counter.updatedAt = new Date(counter.updatedAt);
    if (!DateHelper.isSameDay(counter.updatedAt, today)) {
      return QuestionCounter.reset();
    }
    return counter;
  }

  static reset() {
    const counter: QuestionCounterData = { count: 0, updatedAt: new Date() };
    localStorage.setItem(QUESTION_COUNTER, JSON.stringify(counter));
    return counter;
  }

  static get() {
    return QuestionCounter._sanitizeValue();
  }

  static isIncrementable() {
    const counter = QuestionCounter.get();
    return counter.count < QUESTION_COUNTER_LIMIT;
  }

  static increment() {
    if (!QuestionCounter.isIncrementable()) return;

    const counter = QuestionCounter.get();
    const updatedCounter: QuestionCounter = {
      count: counter.count + 1,
      updatedAt: new Date(),
    };
    localStorage.setItem(QUESTION_COUNTER, JSON.stringify(updatedCounter));
  }
}
