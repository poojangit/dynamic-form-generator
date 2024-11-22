declare module "jsoneditor-react" {
    import { Component } from "react";
  
    interface JsonEditorProps {
      value: object;
      onChange?: (updatedValue: object) => void;
      onError?: (error: Error) => void;
      mode?: "code" | "tree" | "view" | "text" | "preview";
      name?: string;
      search?: boolean;
      history?: boolean;
      navigationBar?: boolean;
      statusBar?: boolean;
      options?: object;
    }
  
    export class JsonEditor extends Component<JsonEditorProps> {}
  }
  