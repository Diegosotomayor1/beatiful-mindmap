import { MindElixirData } from "mind-elixir";

export interface MindElixirDataWithSummary extends MindElixirData {
  nodeData: MindElixirData["nodeData"] & { summary: string } & {
    children: MindElixirData["nodeData"]["children"] & { summary: string }[];
  };
}
