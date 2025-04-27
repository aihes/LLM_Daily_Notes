#!/usr/bin/env python3
"""
合并翻译文件脚本

这个脚本将多个部分的翻译文件合并成一个完整的文件。
用法: python merge_translations.py
"""

import os
import glob

# 配置
INPUT_DIR = "docs/translations"  # 输入文件所在目录
OUTPUT_FILE = "docs/translations/interpretability-urgency.md"  # 输出文件路径
FILE_PATTERN = "interpretability-urgency-part*.md"  # 要合并的文件模式
SORT_FILES = True  # 是否按照文件名排序

def merge_files():
    """合并文件并保存到输出路径"""
    # 确保输出目录存在
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    # 获取所有匹配的文件
    file_pattern = os.path.join(INPUT_DIR, FILE_PATTERN)
    files = glob.glob(file_pattern)
    
    if not files:
        print(f"错误: 没有找到匹配 '{file_pattern}' 的文件")
        return False
    
    # 按文件名排序（如果需要）
    if SORT_FILES:
        files.sort()
    
    print(f"找到 {len(files)} 个文件需要合并:")
    for f in files:
        print(f"  - {os.path.basename(f)}")
    
    # 合并文件内容
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        for file_path in files:
            print(f"处理: {os.path.basename(file_path)}")
            with open(file_path, 'r', encoding='utf-8') as infile:
                content = infile.read()
                
                # 如果不是第一个文件，检查是否需要添加分隔符
                if file_path != files[0]:
                    # 确保文件之间有适当的分隔
                    if not content.startswith('#'):
                        outfile.write('\n\n')
                
                outfile.write(content)
                
                # 确保文件末尾有换行符
                if not content.endswith('\n'):
                    outfile.write('\n')
    
    print(f"合并完成! 输出文件: {OUTPUT_FILE}")
    return True

if __name__ == "__main__":
    merge_files()
