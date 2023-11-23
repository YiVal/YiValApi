"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[500],{7731:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=n(5893),r=n(1151);const t={sidebar_position:13},s="Combination Improver",l={id:"API-Reference/combination-improver",title:"Combination Improver",description:"BaseCombinationImprover",source:"@site/docs/API-Reference/combination-improver.md",sourceDirName:"API-Reference",slug:"/API-Reference/combination-improver",permalink:"/YiValApi/docs/API-Reference/combination-improver",draft:!1,unlisted:!1,editUrl:"https://github.com/YiVal/YiVal/tree/master/website/docs/API-Reference/combination-improver.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Variation Generator",permalink:"/YiValApi/docs/API-Reference/variation-generator"},next:{title:"Examples",permalink:"/YiValApi/docs/Examples"}},a={},c=[{value:"<code>BaseCombinationImprover</code>",id:"basecombinationimprover",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Class Definition",id:"class-definition",level:3},{value:"Description",id:"description",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Example",id:"example",level:3},{value:"<code>OpenAIPromptBasedCombinationImprover</code>",id:"openaipromptbasedcombinationimprover",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Class Definition",id:"class-definition-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Attributes",id:"attributes-1",level:4},{value:"Example",id:"example-1",level:3},{value:"<code>OptimizeByPromptImprover</code>",id:"optimizebypromptimprover",level:2},{value:"Introduction",id:"introduction-2",level:3},{value:"Class Definition",id:"class-definition-2",level:3},{value:"<code>OptimizeByPromptImproverConfig(BaseCombinationImproverConfig)</code>",id:"optimizebypromptimproverconfigbasecombinationimproverconfig",level:4},{value:"Description",id:"description-2",level:5},{value:"Attributes",id:"attributes-2",level:5},{value:"Example",id:"example-2",level:5},{value:"Use OPRO Improver to Enhace Experiment Results",id:"use-opro-improver-to-enhace-experiment-results",level:6},{value:"Using the OpenAIPromptBasedCombinationImprover in YiVal config",id:"using-the-openaipromptbasedcombinationimprover-in-yival-config",level:6},{value:"Custom Combination Improver Guide: <code>improve</code>",id:"custom-combination-improver-guide-improve",level:2},{value:"Introduction",id:"introduction-3",level:3},{value:"Overview of Base Combination Improver",id:"overview-of-base-combination-improver",level:3},{value:"Implementing a Custom Combination Improver",id:"implementing-a-custom-combination-improver",level:3},{value:"Config",id:"config",level:3},{value:"Conclusion",id:"conclusion",level:3}];function m(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"combination-improver",children:"Combination Improver"}),"\n",(0,o.jsx)(i.h2,{id:"basecombinationimprover",children:(0,o.jsx)(i.code,{children:"BaseCombinationImprover"})}),"\n",(0,o.jsx)(i.h3,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(i.p,{children:"This module defines the base class for combination improvers. Combination improvers are responsible for improving the combination of experiments based on their experiment results."}),"\n",(0,o.jsx)(i.h3,{id:"class-definition",children:"Class Definition"}),"\n",(0,o.jsx)(i.h4,{id:"description",children:"Description"}),"\n",(0,o.jsx)(i.h4,{id:"attributes",children:"Attributes"}),"\n",(0,o.jsx)(i.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(i.h2,{id:"openaipromptbasedcombinationimprover",children:(0,o.jsx)(i.code,{children:"OpenAIPromptBasedCombinationImprover"})}),"\n",(0,o.jsx)(i.h3,{id:"introduction-1",children:"Introduction"}),"\n",(0,o.jsx)(i.p,{children:"This module provides an implementation of a combination improver using OpenAI's model to suggest improvements. It leverages the capabilities of OpenAI's language model to analyze the results of an experiment and provide suggestions on how to improve the combination of parameters. The module offers a prompt-based mechanism where the language model is prompted with structured information about the experiment and its results. The model then responds with potential improvements."}),"\n",(0,o.jsx)(i.h3,{id:"class-definition-1",children:"Class Definition"}),"\n",(0,o.jsx)(i.h4,{id:"description-1",children:"Description"}),"\n",(0,o.jsxs)(i.p,{children:["The configuration object is specifically tailored for the ",(0,o.jsx)(i.code,{children:"OpenAIPromptBasedCombinationImprover"})," class. It provides settings to control the iterative improvement process using OpenAI's model for suggesting combination improvements."]}),"\n",(0,o.jsx)(i.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsxs)(i.strong,{children:[(0,o.jsx)(i.code,{children:"openai_model_name(str)"}),"****:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Specifies the OpenAI model to be used."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is ",(0,o.jsx)(i.code,{children:'"gpt-4"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsxs)(i.strong,{children:[(0,o.jsx)(i.code,{children:"max_iterations(int)"}),"****:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The maximum number of iterations for the improvement process."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is set to ",(0,o.jsx)(i.code,{children:"3"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsxs)(i.strong,{children:[(0,o.jsx)(i.code,{children:"stop_conditions(Optional[Dict[str, float]])"}),"****:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Conditions to halt the iterative improvement process based on evaluator scores."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is ",(0,o.jsx)(i.code,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"average_score(Optional[float])"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"A threshold for the average score to stop the iterative process."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is ",(0,o.jsx)(i.code,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"selection_strategy(Optional[SelectionOutput])"})}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Strategy for selecting the best combination."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is ",(0,o.jsx)(i.code,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(i.h2,{id:"optimizebypromptimprover",children:(0,o.jsx)(i.code,{children:"OptimizeByPromptImprover"})}),"\n",(0,o.jsx)(i.h3,{id:"introduction-2",children:"Introduction"}),"\n",(0,o.jsxs)(i.p,{children:["This module offers an implementation of Optimization by PROmpting (OPRO), a method inspired by the paper ",(0,o.jsx)(i.a,{href:"https://arxiv.org/pdf/2309.03409.pdf",children:"Optimization by PROmpting"}),"). OPRO leverages the capabilities of large language models (LLMs) like GPT-4 to optimize tasks by iteratively refining prompts."]}),"\n",(0,o.jsx)(i.p,{children:"The optimization process is driven by a structured prompt that consists of the following sections:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"HEAD_META_INSTRUCTION"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"SOLUTION_SCORE_PAIRS"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"OPTIMATION_TASK_FORMAT (optional)"}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"END_META_INSTRUCTION"}),"\n",(0,o.jsxs)(i.p,{children:["As the optimization process progresses through iterations, new evaluator scores and prompts are appended to the ",(0,o.jsx)(i.code,{children:"SOLUTION_SCORE_PAIRS"})," section, enhancing the overall prompt for the next iteration."]}),"\n",(0,o.jsxs)(i.p,{children:["For practical demonstrations of this concept, refer to the file ",(0,o.jsx)(i.code,{children:"demo/configs/headline_generation_improve.yml"})," and the appendix of the aforementioned paper."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"class-definition-2",children:"Class Definition"}),"\n",(0,o.jsx)(i.h4,{id:"optimizebypromptimproverconfigbasecombinationimproverconfig",children:(0,o.jsx)(i.code,{children:"OptimizeByPromptImproverConfig(BaseCombinationImproverConfig)"})}),"\n",(0,o.jsx)(i.h5,{id:"description-2",children:"Description"}),"\n",(0,o.jsxs)(i.p,{children:["\u200b    The configuration object tailored for the ",(0,o.jsx)(i.code,{children:"OptimizeByPromptImprover"})," class, controlling how the optimization by prompting is executed."]}),"\n",(0,o.jsx)(i.h5,{id:"attributes-2",children:"Attributes"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"improve_var(List[str])"})}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"List of variables that need improvement."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"head_meta_instruction(str)"})}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The initial instructional part of the prompt."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"end_meta_instruction(str)"})}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The ending part of the prompt."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"optimation_task_format(Optional[str])"})}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"An optional task format for optimization."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"model_name(str)"})}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Specifies the LLM model to be used."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is ",(0,o.jsx)(i.code,{children:'"gpt-4"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:(0,o.jsx)(i.code,{children:"max_iterations(int)"})}),":","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The maximum number of optimization iterations."}),"\n",(0,o.jsxs)(i.li,{children:["The default value is ",(0,o.jsx)(i.code,{children:"3"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h5,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(i.h6,{id:"use-opro-improver-to-enhace-experiment-results",children:"Use OPRO Improver to Enhace Experiment Results"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-Python",children:'# Create an OPRO configuration\r\nimprover_config = OptimizeByPromptImproverConfig(\r\n    improve_var=["task"],\r\n    head_meta_instruction="Start of the prompt...",\r\n    end_meta_instruction="End of the prompt...",\r\n    optimation_task_format="Optional format...",\r\n    model_name="gpt-4",\r\n    max_iterations=5\r\n)\r\n\r\n# Initialize the OPRO improver with the configuration\r\nimprover = OptimizeByPromptImprover(improver_config)\r\n\r\n# Use the improver to enhance an experiment\'s prompts\r\nimproved_output = improver.improve(experiment, config, evaluator, token_logger)\n'})}),"\n",(0,o.jsx)(i.h6,{id:"using-the-openaipromptbasedcombinationimprover-in-yival-config",children:"Using the OpenAIPromptBasedCombinationImprover in YiVal config"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-YAML",children:'improver:\r\n  name: "optimize_by_prompt_improver"\r\n  model_name: "gpt-4"\r\n  max_iterations: 2\r\n  improve_var: ["task"]\r\n  head_meta_instruction: |\r\n    Now you will help me generate a prompt which is used to generate a corresponding\r\n    story according to the species of an animal which is [animal_species] and its character [animal_character]. \r\n    I already have some prompt and its evaluation results :\r\n    \r\n  end_meta_instruction: |\r\n    Give me a new prompt that is different from all pairs above, and has a evaluation value higher than any of above.\n'})}),"\n",(0,o.jsxs)(i.h2,{id:"custom-combination-improver-guide-improve",children:["Custom Combination Improver Guide: ",(0,o.jsx)(i.code,{children:"improve"})]}),"\n",(0,o.jsx)(i.p,{children:"This module defines the base class for combination improvers. Combination improvers are responsible for improving the combination of experiments based on their experiment results."}),"\n",(0,o.jsx)(i.h3,{id:"introduction-3",children:"Introduction"}),"\n",(0,o.jsx)(i.p,{children:"Combination improvers play a pivotal role in the experimental framework by optimizing the combination of experiments based on their outcomes. By leveraging combination improvers, experiments can be fine-tuned to achieve better results. This guide will outline the process of creating a custom combination improver."}),"\n",(0,o.jsx)(i.h3,{id:"overview-of-base-combination-improver",children:"Overview of Base Combination Improver"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"BaseCombinationImprover"})," class provides the foundational structure for all combination improvers. It offers methods to:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Register new combination improvers."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Fetch registered combination improvers."}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Retrieve their default configurations."}),"\n",(0,o.jsx)(i.p,{children:"The main responsibility of a combination improver is to improve the setup of experiments based on their results."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"implementing-a-custom-combination-improver",children:"Implementing a Custom Combination Improver"}),"\n",(0,o.jsxs)(i.p,{children:["To create a custom combination improver, one should inherit from the ",(0,o.jsx)(i.code,{children:"BaseCombinationImprover"})," class and implement the ",(0,o.jsx)(i.code,{children:"improve"})," abstract method:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-Python",children:'class CustomCombinationImprover(BaseCombinationImprover):\r\n    """\r\n    Custom combination improver to optimize the setup of experiments.\r\n    """\r\n\r\n    def improve(self, experiment, config, evaluator, token_logger):\r\n        """\r\n        Custom logic to improve the experiment based on its results.\r\n\r\n        Args:\r\n            experiment (Experiment): The experiment with its results.\r\n            config (ExperimentConfig): The original experiment configuration.\r\n            evaluator (Evaluator): A utility class to evaluate the\r\n            ExperimentResult.\r\n            token_logger (TokenLogger): Logs the token usage.\r\n\r\n        Returns:\r\n            ImproverOutput: The result of the improvement.\r\n        """\r\n\r\n        # Custom logic for improvement goes here\r\n        pass\n'})}),"\n",(0,o.jsx)(i.h3,{id:"config",children:"Config"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-Plaintext",children:"custom_improvers:\r\n    class: /path/to/custom_improver.CustomImprover\r\n    config_cls: /path/to/custom_improver_config.CustomImproverConfig\n"})}),"\n",(0,o.jsx)(i.p,{children:"To use it"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-YAML",children:"improver:\r\n  name: custom_improver\n"})}),"\n",(0,o.jsx)(i.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(i.p,{children:["By following this guide, you have successfully created and registered a custom combination improver named ",(0,o.jsx)(i.code,{children:"CustomCombinationImprover"})," within the experimental framework. This custom improver will allow you to optimize experiment combinations based on specific logic and criteria you define. As experiments evolve and grow in complexity, custom combination improvers like the one you've developed will become instrumental in achieving more refined and better results."]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>s});var o=n(7294);const r={},t=o.createContext(r);function s(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);