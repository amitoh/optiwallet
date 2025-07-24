CREATE TABLE "creditCards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"issuer" text NOT NULL,
	"network" text NOT NULL,
	"minimum_income" integer,
	"minimum_credit_score" integer,
	CONSTRAINT "issuer_check" CHECK (issuer IN ('scotiabank','bmo','td','rbc','cibc','national_bank','mbna','desjardins','american_express','capital_one','brim','rogers','tangerine','wealthsimple','simplii','pc_financial','neo','vancity','canadian_tire','walmart','home_trust','koho')),
	CONSTRAINT "network_check" CHECK (network IN ('visa','mastercard','american_express'))
);
--> statement-breakpoint
CREATE INDEX "network_index" ON "creditCards" USING btree ("network");