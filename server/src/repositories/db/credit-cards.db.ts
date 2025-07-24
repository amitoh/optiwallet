import { eq } from "drizzle-orm";
import type { CreditCardModel } from "../../models/credit-cards.model";
import { db } from "../db";
import type { CreditCardTable } from "../schema/credit-cards.schema";
import * as creditCardSchema from "../schema/credit-cards.schema";
import { getFilterConditions, getSortExpression } from "./db.utils";
import type { Filter, Sort } from "./types";
const { creditCards } = creditCardSchema;

export const listCreditCards = async (
  filters?: Filter<CreditCardTable>[],
  sort?: Sort<CreditCardModel>
): Promise<CreditCardModel[]> => {
  const filterCondition = getFilterConditions<CreditCardTable>(
    filters,
    creditCards
  );

  return await db.query.creditCards.findMany({
    where: filterCondition,
    ...(sort && {
      orderBy: getSortExpression(sort),
    }),
  });
};

export const updateCreditCard = async (
  id: number,
  creditCard: Partial<CreditCardModel>
): Promise<void> => {
  if (!id) {
    throw new Error("Credit card ID is required for update");
  }

  const respone = await db
    .update(creditCards)
    .set(creditCard)
    .where(eq(creditCards.id, id));
  console.log("Update response:", JSON.stringify(respone, null, 2));
};
export const deleteCreditCard = async (id: number): Promise<void> => {
  if (!id) {
    throw new Error("Credit card ID is required for deletion");
  }
  await db.delete(creditCards).where(eq(creditCards.id, id));
};
