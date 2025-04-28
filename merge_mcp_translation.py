#!/usr/bin/env python3
"""
合并MCP翻译文件脚本

这个脚本将多个部分的MCP翻译文件合并成一个完整的文件。
用法: python merge_mcp_translation.py
"""

import os

# 配置
INPUT_DIR = "docs/translations"  # 输入文件所在目录
OUTPUT_FILE = "docs/news/mcp-vs-api.md"  # 输出文件路径
INPUT_FILES = [
    "mcp-vs-api-part1.md",
    "mcp-vs-api-part2.md",
    "mcp-vs-api-part3.md",
    "mcp-vs-api-part4.md"
]

def merge_files():
    """合并文件并保存到输出路径"""
    # 确保输出目录存在
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    print(f"开始合并MCP翻译文件到: {OUTPUT_FILE}")
    
    # 合并文件内容
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        for i, filename in enumerate(INPUT_FILES):
            file_path = os.path.join(INPUT_DIR, filename)
            print(f"处理: {filename}")
            
            with open(file_path, 'r', encoding='utf-8') as infile:
                content = infile.read()
                
                # 如果不是第一个文件，移除文件开头的标题（避免重复）
                if i > 0:
                    # 查找第一个标题后的内容
                    if content.startswith('# '):
                        # 跳过第一行
                        content = '\n'.join(content.split('\n')[1:])
                
                outfile.write(content)
                
                # 确保文件末尾有换行符
                if not content.endswith('\n'):
                    outfile.write('\n')
    
    print(f"合并完成! 输出文件: {OUTPUT_FILE}")
    return True

if __name__ == "__main__":
    merge_files()
